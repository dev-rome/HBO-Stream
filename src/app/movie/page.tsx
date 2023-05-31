"use client";

import FeaturedMedia from "@/src/components/ui/FeaturedMedia";
import MediaRow from "@/src/components/MediaRow";
import CastInfo from "@/src/components/ui/cast-info/CastInfo";

function Movie() {
  return (
    <>
      <FeaturedMedia
        title="The Movie"
        location="In theaters now and on HBO Stream."
        video="https://www.youtube.com/embed/573GCxqkYEg?autoplay=1&mute=1&loop=1"
      />
      <MediaRow
        title="More like this"
        genreId="28"
        imgWidth="240px"
        imgHeight="360px"
      />
      <CastInfo />
    </>
  );
}

export default Movie;
