export default function ActionButtons() {
  const actions = [
    { icon: "👍", label: "53K" },
    { icon: "👎", label: "" },
    { icon: "🔁", label: "Share" },
    { icon: "⬇️", label: "Download" },
    { icon: "⋯", label: "More" },
  ];

  return (
    <div className="flex gap-4 border-b border-gray-700 py-3 mb-4">
      {actions.map((action, i) => (
        <button
          key={i}
          className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition"
        >
          <span>{action.icon}</span>
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
}
