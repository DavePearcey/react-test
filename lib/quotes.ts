const quotes = [
  {
    content: "I like cheese.",
    author: "Me",
  },
  {
    content: "This is a quote.",
    author: "Unknown",
  },
  {
    content: "For Eisengard!",
    author: "Aragon",
  },
];

export async function getRandomQuote() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return quotes[Math.floor(Math.random() * quotes.length)];
}
