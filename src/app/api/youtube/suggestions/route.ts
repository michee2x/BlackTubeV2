// app/api/youtube/suggestions/route.ts
export async function GET(req: Request) {
    const API_KEY = process.env.API_KEY;
    const baseUrl = "https://youtube.googleapis.com/youtube/v3/search";
  
    // Extract optional query param `videoId`
    const { searchParams } = new URL(req.url);
    const videoId = searchParams.get("videoId") ?? "Ks-_Mh1QhMc"; // fallback video
  
    const suggestionsUrl = `${baseUrl}?part=snippet&type=video&relatedToVideoId=wyUpNuNS25g&maxResults=10&key=${API_KEY}`;
  
    try {
      const res = await fetch(suggestionsUrl);
      const data = await res.json();

      console.log("YouTube Suggestions API response:", data);
  
      if (!data.items) {
        return new Response(JSON.stringify({ error: "No suggested videos found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      // Enrich with dummy view count (YouTube search API doesn't return views)
      const videos = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails?.medium?.url,
        views: `${Math.floor(Math.random() * 1000)}K views`,
      }));
  
      return new Response(JSON.stringify({ videos }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Failed to fetch suggested videos" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  