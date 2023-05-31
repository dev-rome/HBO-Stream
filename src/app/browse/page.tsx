"use client";

import FeaturedMedia from "@/src/components/ui/FeaturedMedia";
import MediaRow from "@/src/components/MediaRow";
import AuthCheck from "@/src/features/AuthCheck";

function Browse() {
  return (
    <>
      <FeaturedMedia />
      <MediaRow title="For You" imgWidth="240px" imgHeight="360px" />
      <MediaRow title="Series" genreId="10765" imgWidth="450px" imgHeight="255px" />
      <MediaRow title="Action" genreId="28" imgWidth="240px" imgHeight="360px" />
      <MediaRow title="Thriller" genreId="53" imgWidth="240px" imgHeight="360px" />
      <MediaRow title="Comedy" genreId="35" imgWidth="240px" imgHeight="360px" />
      <MediaRow title="Animation" genreId="16" imgWidth="600px" imgHeight="295px" />
      <MediaRow title="Horror" genreId="27" imgWidth="240px" imgHeight="360px" />
      <MediaRow title="Documentary" genreId="99" imgWidth="240px" imgHeight="360px" />
      <MediaRow title="Romance" genreId="10749" imgWidth="700px" imgHeight="395px" />
      <MediaRow title="Crime" genreId="80" imgWidth="240px" imgHeight="360px" />
      <MediaRow title="Science Fiction" genreId="878" imgWidth="240px" imgHeight="360px" />
    </>
  );
}

export default AuthCheck(Browse);
