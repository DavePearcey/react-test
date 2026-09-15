type GreetingCardProps = {
  title: string;
  message: string;
};

export default function GreetingCard({ title, message }: GreetingCardProps) {
  return (
    <div className="card">
      <p className="font-medium">{title}</p>
      <p className="text-sm">{message}</p>
    </div>
  );
}
