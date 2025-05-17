// app/api/youtube/shorts/route.ts
export async function GET(req: Request) {
    const API_KEY = process.env.API_KEY;
    const regionCode = "US";
    const maxResults = 3;
  
    const shortsUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&regionCode=${regionCode}&type=video&videoDuration=short&videoType=any&key=${API_KEY}`;
  
    try {
      const res = await fetch(shortsUrl);
  
      if (!res.ok) {
        const errorText = await res.text();
        return new Response(
          JSON.stringify({ error: "YouTube API error", detail: errorText }),
          { status: res.status, headers: { "Content-Type": "application/json" } }
        );
      }
  
      const data = await res.json();
      console.log("heyyyyy dataaaaaaaaaaaaa", data)
  
      return new Response(JSON.stringify({ items: data.items }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Shorts API error:", error);
      return new Response(
        JSON.stringify({ error: "Server Error", detail: String(error) }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  