type CommentProps = {
  user: string;
  text: string;
};

export default function Comment({ user, text }: CommentProps) {
  return (
    <div className="flex gap-3 mb-4">
      <div className="w-9 h-9 bg-gray-600 rounded-full" />
      <div>
        <p className="font-semibold text-sm">{user}</p>
        <p className="text-sm text-gray-300">{text}</p>
      </div>
    </div>
  );
}
