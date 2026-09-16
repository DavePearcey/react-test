import ShadcnShowcase from "@/components/shadcn-showcase/shadcn-showcase";

export default function ShadcnPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-3xl font-semibold">shadcn/ui Showcase</h1>
        <p className="text-muted-foreground">
          Shadcn is a library of pre-styled components based on Radix UI. It provides a library of base components that can be customized and extended. This allows for a consistent and responsive design across projects, and allows for faster development. Components live in{" "}
          <code className="code">components/ui/</code> and can be copied or customised.
        </p>
      </div>
      <ShadcnShowcase />
    </div>
  );
}
