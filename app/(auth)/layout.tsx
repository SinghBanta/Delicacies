export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="h-screen flex justify-center items-center">
        {children}
      </div>
    </main>
  );
}
