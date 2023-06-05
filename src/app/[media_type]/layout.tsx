import Header from "@/src/components/ui/Header";

function MovieLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-color-primary">
      <Header />
      {children}
    </section>
  );
}

export default MovieLayout;