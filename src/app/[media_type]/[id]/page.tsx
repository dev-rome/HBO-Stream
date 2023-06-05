"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import FeaturedImage from "@/src/components/ui/FeaturedImage";
import CastInfo from "@/src/components/ui/cast-info/CastInfo";
import AuthCheck from "@/src/features/AuthCheck";
import axios from "axios";

const DynamicMediaRowSimilar = dynamic(
  () => import("@/src/components/MediaRowSimilar")
);

interface SingleMediaProps {
  id: any;
  backdrop_path: string;
  title: string;
  name: string;
  overview: string;
  media_type: string;
}

function SingleMedia() {
  const [singleMedia, setSingleMedia] = useState<SingleMediaProps | null>(null);

  const { id, media_type } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
      )
      .then((res) => {
        const movieData = res.data;
        setSingleMedia(movieData);
      })
      .catch((err) => console.error(err));
  }, [id, media_type]);

  if (!singleMedia) {
    return null;
  }

  return (
    <>
      <FeaturedImage
        title={singleMedia.title}
        overview={singleMedia.overview}
        image={`https://image.tmdb.org/t/p/original${singleMedia.backdrop_path}`}
      />

      <DynamicMediaRowSimilar
        title="More like this"
        imgWidth="240px"
        imgHeight="360px"
      />
      <CastInfo />
    </>
  );
}

export default AuthCheck(SingleMedia);
