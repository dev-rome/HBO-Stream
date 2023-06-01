"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import FeaturedImage from "@/src/components/ui/FeaturedImage";
import MediaRow from "@/src/components/MediaRow";
import CastInfo from "@/src/components/ui/cast-info/CastInfo";
import axios from "axios";

interface MovieProps {
  backdrop_path: string;
  title: string;
  overview: string;
}

function Movie() {
  const [singleMovie, setSingleMovie] = useState<MovieProps | null>(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
      )
      .then((res) => {
        setSingleMovie(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
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
