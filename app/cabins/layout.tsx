export const metadata = {
  title: "Cabins",
  description: "Cabins layout",
};

export default function CabinsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Cabins Layout</h2>
      {children}
    </div>
  );
}
