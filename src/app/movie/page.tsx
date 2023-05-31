"use client"

import FeaturedMedia from "@/src/components/ui/FeaturedMedia";
import MediaRow from "@/src/components/MediaRow";
import CastInfo from "@/src/components/ui/cast-info/CastInfo";

function Movie() {
  return (
    <>
      <FeaturedMedia />
      <MediaRow title="More like this" genreId="28"  imgWidth="240px" imgHeight="360px" />
      <CastInfo />
    </>
  );
}

export default Movie;
