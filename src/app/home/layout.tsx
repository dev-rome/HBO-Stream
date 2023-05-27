import Header from "@/src/components/Header";
import SideNavMenu from "@/src/components/side-nav/SideNavMenu";

function HomePageLayout() {
  return (
    <section className="min-h-screen bg-orange-700">
      <Header />
      <SideNavMenu />
    </section>
  );
}

export default HomePageLayout;
