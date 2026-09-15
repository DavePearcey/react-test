export default function ServerTime() {
  const renderedAt = new Date().toLocaleString();

  return (
    <p className="font-mono text-sm">
      Rendered on the server at: {renderedAt}
    </p>
  );
}
