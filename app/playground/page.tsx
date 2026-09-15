import Link from "next/link";
import Counter from "@/components/playground/Counter";
import GreetingCard from "@/components/playground/GreetingCard";
import NameGreeting from "@/components/playground/NameGreeting";
import PlaygroundSection from "@/components/playground/PlaygroundSection";
import ServerQuote from "@/components/playground/ServerQuote";
import ServerTime from "@/components/playground/ServerTime";

export default function PlaygroundPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-3xl font-semibold">Playground</h1>
        <p className="text-gray-400">
          This page itself is a Server Component — interactive components below opt in with{" "}
          <code className="rounded bg-gray-100 px-1 text-sm text-gray-600">use client</code>.
        </p>
      </div>

      <PlaygroundSection
        title="1. File-based routing"
        description="Folders under app/ map to URLs. This file is app/playground/page.tsx → /playground."
      >
        <ul className="list-inside list-disc space-y-1 text-sm">
          <li>
            <Link href="/" className="underline">
              /
            </Link>{" "}
            → app/page.tsx
          </li>
          <li>
            <Link href="/about" className="underline">
              /about
            </Link>{" "}
            → app/about/page.tsx
          </li>
          <li>
            <Link href="/playground" className="underline">
              /playground
            </Link>{" "}
            → app/playground/page.tsx
          </li>
        </ul>
      </PlaygroundSection>

      <PlaygroundSection
        title="2. Server Components (default)"
        description="Run on the server. Good for static content and data fetching — no useState or onClick here."
      >
        <div className="space-y-3">
          <ServerTime />
          <ServerQuote />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="3. Client Components"
        description='Using "use client" at the top of a file allows for React hooks and browser events like clicks. Knowing when to use SSR vs CSR is key to performance. This counter example also shows how to use localStorage to persist state between sessions.'
      >
        <Counter />
      </PlaygroundSection>

      <PlaygroundSection
        title="4. State with useState"
        description="Client-side state updates the UI instantly without a full page reload."
      >
        <NameGreeting />
      </PlaygroundSection>

      <PlaygroundSection
        title="5. Props"
        description="Pass data from a parent component down to a child. Works in both Server and Client Components. A somewhat pointless example as all sections of this page use a section component with props already."
      >
        <div className="grid gap-2 sm:grid-cols-2">
          <GreetingCard
            title="Welcome back"
            message="Props let you reuse the same component with different data."
          />
          <GreetingCard
            title="Tip"
            message="Check GreetingCard.tsx, it receives title and message as props."
          />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="6. Shared layout"
        description="app/layout.tsx wraps every page. That is why Header and Footer appear here automatically."
      >
        <p className="text-sm text-gray-400">
          See{" "}
          <code className="rounded bg-gray-100 px-1">components/Header.tsx</code>{" "}
          or{" "}
          <code className="rounded bg-gray-100 px-1">app/layout.tsx</code> and notice that the header and footer are the same on every page.
        </p>
      </PlaygroundSection>

      <PlaygroundSection
        title="7. Route Handlers (API routes)"
        description="Files named route.ts inside app/api/ expose HTTP endpoints. Try opening the link below."
      >
        <p className="text-sm">
          <a href="/api/quote" target="_blank" className="underline">
            /api/quote
          </a>{" "}
          → app/api/quote/route.ts returns JSON. The quote above uses the same
          data via{" "}
          <code className="rounded bg-gray-100 px-1 text-gray-600">lib/quotes.ts</code>.
        </p>
      </PlaygroundSection>
    </div>
  );
}
