export default function ChannelInfo() {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-500 rounded-full" />
        <div>
          <p className="font-semibold">Dreog</p>
          <p className="text-sm text-gray-400">342K subscribers</p>
        </div>
      </div>
      <button className="bg-white text-black px-4 py-1 rounded font-semibold">
        Subscribe
      </button>
    </div>
  );
}
