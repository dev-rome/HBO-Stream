"use client";

import FeaturedMedia from "@/src/components/ui/FeaturedMedia";
import AuthCheck from "@/src/features/AuthCheck";
import dynamic from "next/dynamic";

const DynamicMediaRow = dynamic(() => import("@/src/components/MediaRow"));

function Browse() {
  return (
    <>
      <FeaturedMedia
        title="The Movie"
        overview="In theaters now and on HBO Stream."
        video="https://www.youtube.com/embed/573GCxqkYEg?autoplay=1&mute=1&loop=1"
      />
      <DynamicMediaRow title="For You" imgWidth="240px" imgHeight="360px" media_type="movie" />
      <DynamicMediaRow
        title="Series"
        genreId="10765"
        imgWidth="240px"
        imgHeight="360px"
        media_type="tv"
      />
      <DynamicMediaRow
        title="Action"
        genreId="28"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
      <DynamicMediaRow
        title="Thriller"
        genreId="53"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
      <DynamicMediaRow
        title="Comedy"
        genreId="35"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
      <DynamicMediaRow
        title="Animation"
        genreId="16"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
      <DynamicMediaRow
        title="Horror"
        genreId="27"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
      <DynamicMediaRow
        title="Documentary"
        genreId="99"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
      <DynamicMediaRow
        title="Romance"
        genreId="10749"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
      <DynamicMediaRow
        title="Crime"
        genreId="80"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
      <DynamicMediaRow
        title="Science Fiction"
        genreId="878"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
    </>
  );
}

export default AuthCheck(Browse);
