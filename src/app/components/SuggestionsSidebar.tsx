import VideoSuggest from "./VideoSuggest";

const suggestions = Array.from({ length: 10 }).map((_, i) => ({
  title: `Suggested Video Title ${i + 1}`,
  channel: "Random Channel",
  views: `${Math.floor(Math.random() * 100)}K views`,
}));

export default function SuggestionsSidebar() {
  return <div className="space-y-4 mt-4 lg:mt-0">s</div>;
}
