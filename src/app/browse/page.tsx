"use client";

import FeaturedMedia from "@/src/components/ui/FeaturedMedia";
import AuthCheck from "@/src/features/AuthCheck";
import dynamic from "next/dynamic";

const DynamicMediaRow = dynamic(() => import("@/src/components/MediaRow"));

function Browse() {
  return (
    <>
      <FeaturedMedia />
      <DynamicMediaRow title="For You" imgWidth="240px" imgHeight="360px" />
      <DynamicMediaRow
        title="Series"
        genreId="10765"
        imgWidth="240px"
        imgHeight="360px"
      />
      <DynamicMediaRow
        title="Action"
        genreId="28"
        imgWidth="240px"
        imgHeight="360px"
      />
      <DynamicMediaRow
        title="Thriller"
        genreId="53"
        imgWidth="240px"
        imgHeight="360px"
      />
      <DynamicMediaRow
        title="Comedy"
        genreId="35"
        imgWidth="240px"
        imgHeight="360px"
      />
      <DynamicMediaRow
        title="Animation"
        genreId="16"
        imgWidth="240px"
        imgHeight="360px"
      />
      <DynamicMediaRow
        title="Horror"
        genreId="27"
        imgWidth="240px"
        imgHeight="360px"
      />
      <DynamicMediaRow
        title="Documentary"
        genreId="99"
        imgWidth="240px"
        imgHeight="360px"
      />
      <DynamicMediaRow
        title="Romance"
        genreId="10749"
        imgWidth="240px"
        imgHeight="360px"
      />
      <DynamicMediaRow
        title="Crime"
        genreId="80"
        imgWidth="240px"
        imgHeight="360px"
      />
      <DynamicMediaRow
        title="Science Fiction"
        genreId="878"
        imgWidth="240px"
        imgHeight="360px"
      />
    </>
  );
}

export default AuthCheck(Browse);
