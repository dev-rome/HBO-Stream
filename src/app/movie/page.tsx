import CastInfo from "@/src/components/ui/cast-info/CastInfo";
import FeaturedMedia from "@/src/components/ui/FeaturedMedia";
import PosterView from "@/src/components/ui/PosterView";

function Movie() {
  return (
    <>
      <FeaturedMedia />
      <PosterView />
      <CastInfo />
    </>
  );
}

export default Movie;