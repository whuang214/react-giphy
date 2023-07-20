export default function Giphy({ gif }) {
  return (
    <div
      className="gif-container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        src={gif.images.original.url}
        alt={gif.title}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}
