type ShowcaseSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ShowcaseSection({
  title,
  children,
}: ShowcaseSectionProps) {
  return (
    <section className="rounded-lg border border-border p-4">
      <h2 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        {title}
      </h2>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  );
}
