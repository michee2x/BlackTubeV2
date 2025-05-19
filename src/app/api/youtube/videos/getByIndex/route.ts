// app/api/youtube/video/route.ts

export async function GET(req: Request) {
    const API_KEY = process.env.API_KEY;
  
    const { searchParams } = new URL(req.url);
    const videoId = searchParams.get("videoId");
  
    if (!videoId) {
      return new Response(JSON.stringify({ error: "Missing videoId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&id=${videoId}&key=${API_KEY}`;
  
    try {
      const videoRes = await fetch(videoUrl, {
        headers: { Accept: "application/json" },
      });
  
      if (!videoRes.ok) {
        const errorText = await videoRes.text();
        return new Response(
          JSON.stringify({ error: "YouTube API video error", detail: errorText }),
          { status: videoRes.status, headers: { "Content-Type": "application/json" } }
        );
      }
  
      const videoData = await videoRes.json();
  
      if (!videoData.items || videoData.items.length === 0) {
        return new Response(
          JSON.stringify({ error: "No video found for the given ID" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
  
      const video = videoData.items[0];
      const channelId = video.snippet.channelId;
  
      const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`;
  
      const channelRes = await fetch(channelUrl, {
        headers: { Accept: "application/json" },
      });
  
      if (!channelRes.ok) {
        const errorText = await channelRes.text();
        return new Response(
          JSON.stringify({ error: "YouTube API channel error", detail: errorText }),
          { status: channelRes.status, headers: { "Content-Type": "application/json" } }
        );
      }
  
      const channelData = await channelRes.json();
      const channelInfo = channelData.items?.[0]?.snippet || null;
  
      return new Response(
        JSON.stringify({ ...video, channelInfo }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Internal Server Error", detail: String(error) }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  