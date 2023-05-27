import Header from "@/src/components/ui/Header";
import SideNavMenu from "@/src/components/side-nav/SideNavMenu";

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-color-primary">
      <Header />
      <SideNavMenu />
      {children}
    </section>
  );
}

export default HomePageLayout;
