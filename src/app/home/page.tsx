import FeaturedMedia from "@/src/components/ui/FeaturedMedia";
import ForYouList from "@/src/components/ui/ForYouList";
import JustAdded from "@/src/components/ui/JustAdded";
import PosterView from "@/src/components/ui/PosterView";

function HomePage() {
  return (
    <>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </>
  );
}

export default HomePage;
