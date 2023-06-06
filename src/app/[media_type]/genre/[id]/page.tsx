"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { shuffleMedia } from "@/utils/shuffle";
import FeaturedImage from "@/src/components/ui/FeaturedImage";
import GenreNavMenu from "@/src/components/side-nav/GenreNavMenu";
import dynamic from "next/dynamic";
import AuthCheck from "@/src/features/AuthCheck";
import axios from "axios";

const DynamicMediaGenre = dynamic(() => import("@/src/components/MediaGenre"));

interface GenreProps {
  id: string;
  name: string;
}

interface FeaturedMediaProps {
  title: string;
  name: string;
  backdrop_path: string;
  overview: string;
}

function Genre() {
  const [genreData, setGenreData] = useState<GenreProps[]>([]);
  const [featuredMedia, setFeaturedMedia] = useState<FeaturedMediaProps | null>(
    null
  );
  const { media_type, id } = useParams();

  useEffect(() => {
    Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/genre/${media_type}/list?api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
      ),
      axios.get(
        `https://api.themoviedb.org/3/discover/${media_type}?primary_release_year=2021&with_genres=${id}&api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
      ),
    ])
      .then(([genreRes, featuredRes]) => {
        setGenreData(genreRes.data.genres);
        setFeaturedMedia(shuffleMedia(featuredRes.data.results)[0]);
      })
      .catch((err) => console.error(err));
  }, [media_type, id]);

  if (!featuredMedia) {
    return null;
  }

  const { title, name, backdrop_path, overview } = featuredMedia;

  const showMedia = () => {
    return genreData.map((item, index) => {
      return (
        <DynamicMediaGenre
          key={item.id}
          title={item.name}
          imgWidth="240px"
          imgHeight="360px"
          media_type={media_type}
          genreId={id}
          page={index + 1}
        />
      );
    });
  };

  return (
    <>
      <FeaturedImage
        title={title || name}
        overview={overview}
        image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      />
      <GenreNavMenu media_type={media_type} genres={genreData} />
      {showMedia()}
    </>
  );
}

export default AuthCheck(Genre);
