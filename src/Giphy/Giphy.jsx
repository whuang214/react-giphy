export default function Giphy({ gif }) {
  return (
    <div className="gif-container">
      <img src={gif.images.original.url} alt={gif.title} />
    </div>
  );
}
