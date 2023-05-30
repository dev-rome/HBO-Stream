"use client";

import FeaturedMedia from "@/src/components/ui/FeaturedMedia";
import MediaRow from "@/src/components/MediaRow";
import AuthCheck from "@/src/features/AuthCheck";

function Browse() {
  return (
    <>
      <FeaturedMedia />
      <MediaRow title="For You" imgWidth="240px" imgHeight="160px" />
      <MediaRow title="Just Added" imgWidth="300px" imgHeight="400px" />
      <MediaRow title="Movies" imgWidth="175px" imgHeight="300px" />
    </>
  );
}

export default AuthCheck(Browse);
