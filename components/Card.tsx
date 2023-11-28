interface ICardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: ICardProps) {
  return (
    <div className="w-full max-w-[800px] rounded-md bg-white p-4 text-black shadow-md shadow-yellow-500">
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{children}</p>
    </div>
  );
}
