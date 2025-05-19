export async function GET(req: Request) {
    const API_KEY = process.env.API_KEY;
    const maxResults = 10;
    const regionCode = "US";
  
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDuration=short&maxResults=${maxResults}&regionCode=${regionCode}&q=shorts&key=${API_KEY}`;
  
    try {
      const res = await fetch(searchUrl, {
        headers: { Accept: "application/json" },
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        return new Response(
          JSON.stringify({ error: "YouTube search failed", detail: errorText }),
          { status: res.status, headers: { "Content-Type": "application/json" } }
        );
      }
  
      const data = await res.json();
  
      if (!data.items || data.items.length === 0) {
        return new Response(
          JSON.stringify({ error: "No shorts found" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
  
      // Extract video IDs to get detailed info (like stats & playback)
      const videoIds = data.items.map((item: any) => item.id.videoId).join(",");
  
      const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${API_KEY}`;
      const videoRes = await fetch(videosUrl);
  
      if (!videoRes.ok) {
        return new Response(
          JSON.stringify({ error: "Video fetch failed" }),
          { status: 500 }
        );
      }
  
      const videosData = await videoRes.json();
  
      return new Response(JSON.stringify({ items: videosData.items }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Server error", detail: String(err) }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  