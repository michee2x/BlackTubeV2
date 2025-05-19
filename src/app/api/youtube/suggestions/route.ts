// app/api/youtube/by-category/route.ts
export async function GET(req: Request) {
  const API_KEY = process.env.API_KEY;
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId") || "28"; // default to Science & Tech

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${categoryId}&regionCode=US&maxResults=10&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      return new Response(JSON.stringify({ error: "No videos found for this category" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const videos = data.items.map((item: any) => ({
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
      views: `${Math.floor(Math.random() * 900 + 100)}K views`,
      videoId: item.id,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    return new Response(JSON.stringify({ videos }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal error", detail: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
