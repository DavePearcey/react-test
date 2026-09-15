type PlaygroundSectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function PlaygroundSection({
  title,
  description,
  children,
}: PlaygroundSectionProps) {
  return (
    <section className="rounded border border-border p-4">
      <h2 className="mb-1 text-lg font-semibold">{title}</h2>
      <p className="mb-4 text-sm text-muted">{description}</p>
      {children}
    </section>
  );
}
