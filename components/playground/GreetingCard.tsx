type GreetingCardProps = {
  title: string;
  message: string;
};

export default function GreetingCard({ title, message }: GreetingCardProps) {
  return (
    <div className="rounded bg-gray-50 p-3 text-gray-600">
      <p className="font-medium">{title}</p>
      <p className="text-sm">{message}</p>
    </div>
  );
}
