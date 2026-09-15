import { getRandomQuote } from "@/lib/quotes";

export default async function ServerQuote() {
  const quote = await getRandomQuote();

  return (
    <blockquote className="border-l-2 pl-3 text-sm italic text-gray-600">
      &ldquo;{quote.content}&rdquo;
      <footer className="mt-1 not-italic text-gray-400">- {quote.author}</footer>
    </blockquote>
  );
}
