import Header from "@/src/components/ui/Header";

export default function BrowsePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-color-primary">
      <Header />
      {children}
    </section>
  );
}
