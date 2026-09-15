import { getRandomQuote } from "@/lib/quotes";

export default async function ServerQuote() {
  const quote = await getRandomQuote();

  return (
    <blockquote className="border-l-2 border-border pl-3 text-sm italic text-muted-foreground">
      &ldquo;{quote.content}&rdquo;
      <footer className="mt-1 not-italic text-muted">- {quote.author}</footer>
    </blockquote>
  );
}
