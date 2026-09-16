import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border px-6 py-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          React Test
        </Link>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/playground">Playground</Link>
          <Link href="/shadcn">Shadcn</Link>
        </nav>
      </div>
    </header>
  );
}
