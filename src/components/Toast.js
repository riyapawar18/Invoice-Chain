export default function Toast({ msg }) {
  return (
    <div className="fixed top-5 right-5 bg-green-800 text-white px-4 py-2 rounded-xl text-xs shadow-lg border border-green-600">
      {msg}
    </div>
  );
}
