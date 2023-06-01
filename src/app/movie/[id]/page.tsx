"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import FeaturedImage from "@/src/components/ui/FeaturedImage";
import MediaRowSimilar from "@/src/components/MediaRowSimilar";
import CastInfo from "@/src/components/ui/cast-info/CastInfo";
import axios from "axios";

const DynamicMediaRowSimilar = dynamic(
  () => import("@/src/components/MediaRowSimilar")
);

interface MovieProps {
  id: any;
  backdrop_path: string;
  title: string;
  overview: string;
}

function Movie() {
  const [singleMovie, setSingleMovie] = useState<MovieProps | null>(null);

  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
      ),
    ])
      .then(([movieRes]) => {
        setSingleMovie(movieRes.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!singleMovie) {
    return null;
  }

  return (
    <>
      <FeaturedImage
        title={singleMovie.title}
        overview={singleMovie.overview}
        image={`https://image.tmdb.org/t/p/original${singleMovie.backdrop_path}`}
      />
      <DynamicMediaRowSimilar
        title="More like this"
        imgWidth="240px"
        imgHeight="360px"
      />
      <CastInfo
      />
    </>
  );
}

export default Movie;
