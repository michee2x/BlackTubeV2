export default function Stories() {
  const stories = Array.from({ length: 5 }).map((_, i) => `Story ${i + 1}`);

  return (
    <div className="flex overflow-x-auto gap-4 mb-4">
      {stories.map((story, i) => (
        <div
          key={i}
          className="w-16 h-28 bg-gray-700 flex-shrink-0 rounded-lg flex items-end justify-center text-xs text-white"
        >
          {story}
        </div>
      ))}
    </div>
  );
}
