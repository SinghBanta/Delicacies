import ThemeToggle from "@/components/shared/ThemeToggle";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
        <ThemeToggle/>
        sidebar
        topbar
          {children}
      </main>
    );
  }
  