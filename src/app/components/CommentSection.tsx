import Comment from "./Comment";

const comments = [
  { user: "JohnDoe", text: "This video is hilarious 😂" },
  { user: "Viewer22", text: "Who else comes back to watch this again?" },
  { user: "FunnyGuy", text: "The reactions are gold!" },
];

export default function CommentSection() {
  return (
    <div className="mt-4 p-4">
      <h2 className="text-lg font-semibold mb-2">561 Comments</h2>
      {comments.map((c, i) => (
        <Comment key={i} {...c} />
      ))}
    </div>
  );
}
