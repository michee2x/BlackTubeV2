// app/api/youtube/most-popular/route.ts

export async function GET(req: Request) {
    const API_KEY = process.env.API_KEY;
    const regionCode = "US";
    const maxResults = 25;
  
    // ✅ Update the videosUrl to include more parts
    const videosUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&chart=mostPopular&regionCode=${regionCode}&maxResults=${maxResults}&key=${API_KEY}`;
  
    try {
      // 1. Fetch most popular videos
      const videosRes = await fetch(videosUrl, {
        headers: { Accept: "application/json" },
      });
  
      if (!videosRes.ok) {
        const errorText = await videosRes.text();
        return new Response(
          JSON.stringify({ error: "YouTube API videos error", detail: errorText }),
          { status: videosRes.status, headers: { "Content-Type": "application/json" } }
        );
      }
  
      const videosData = await videosRes.json();
  
      if (!videosData.items || videosData.items.length === 0) {
        return new Response(
          JSON.stringify({ error: "No videos found" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
  
      // 2. Extract unique channel IDs from videos
      const channelIds = Array.from(
        new Set(videosData.items.map((video: any) => video.snippet.channelId))
      ).join(",");
  
      // ✅ Fetch full channel info (with snippet part)
      const channelsUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds}&key=${API_KEY}`;
  
      const channelsRes = await fetch(channelsUrl, {
        headers: { Accept: "application/json" },
      });
  
      if (!channelsRes.ok) {
        const errorText = await channelsRes.text();
        return new Response(
          JSON.stringify({ error: "YouTube API channels error", detail: errorText }),
          { status: channelsRes.status, headers: { "Content-Type": "application/json" } }
        );
      }
  
      const channelsData = await channelsRes.json();
  
      // 4. Map channelId -> channel snippet for quick lookup
      const channelMap = new Map<string, any>();
      channelsData.items.forEach((channel: any) => {
        channelMap.set(channel.id, channel.snippet);
      });
  
      // 5. Merge channel info into each video item
      const enrichedVideos = videosData.items.map((video: any) => {
        const channelSnippet = channelMap.get(video.snippet.channelId);
        return {
          ...video,
          channelInfo: channelSnippet || null,
        };
      });
  
      // 6. Return the enriched video data
      return new Response(JSON.stringify({ items: enrichedVideos }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Fetch error:", error);
  
      return new Response(
        JSON.stringify({ error: "Internal Server Error", detail: String(error) }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  