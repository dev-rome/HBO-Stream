import FeaturedMedia from "@/src/components/ui/FeaturedMedia";
import MediaRow from "@/src/components/MediaRow";
import CastInfo from "@/src/components/ui/cast-info/CastInfo";

function Movie() {
  return (
    <>
      <FeaturedMedia />
      <MediaRow title="More like this" imgWidth="175px" imgHeight="300px" />
      <CastInfo />
    </>
  );
}

export default Movie;
