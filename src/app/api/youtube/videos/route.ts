export async function GET(req: Request) {
  const API_KEY = process.env.API_KEY;
  const regionCode = "US";
  const maxResults = 15;

  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") || "28"; // default to Tech

  const videosUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&chart=mostPopular&regionCode=${regionCode}&videoCategoryId=${category}&maxResults=${maxResults}&key=${API_KEY}`;
  try {
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
        JSON.stringify({ error: "No tech videos found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const channelIds = Array.from(
      new Set(videosData.items.map((video: any) => video.snippet.channelId))
    ).join(",");

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

    const channelMap = new Map<string, any>();
    channelsData.items.forEach((channel: any) => {
      channelMap.set(channel.id, channel.snippet);
    });

    const enrichedVideos = videosData.items.map((video: any) => {
      const channelSnippet = channelMap.get(video.snippet.channelId);
      return {
        ...video,
        channelInfo: channelSnippet || null,
      };
    });

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
