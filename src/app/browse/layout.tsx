import Header from "@/src/components/ui/Header";

function BrowsePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-color-primary">
      <Header />
      {children}
    </section>
  );
}

export default BrowsePageLayout;
