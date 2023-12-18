export default function WhiteRoundedCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white md:max-h-[640px] md:min-h-[unset] md:max-w-[1160px] md:overflow-hidden md:rounded-[2rem] md:p-6">
      {children}
    </div>
  );
}
