"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { shuffleMedia } from "@/utils/shuffle";
import FeaturedMedia from "@/src/components/ui/FeaturedMedia";
import GenreNavMenu from "@/src/components/side-nav/GenreNavMenu";
import dynamic from "next/dynamic";
import AuthCheck from "@/src/features/AuthCheck";
import axios from "axios";

const DynamicMediaRow = dynamic(() => import("@/src/components/MediaRow"));

interface GenreProps {
  id: number;
  name: string;
}

interface FeaturedMediaProps {
  title: string;
  overview: string;
  video: string;
}

function Media() {
  const [genreData, setGenreData] = useState<GenreProps[]>([]);
  const [featuredMedia, setFeaturedMedia] = useState<FeaturedMediaProps | null>(null);
  const { media_type } = useParams();

  useEffect(() => {
    Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/genre/${media_type}/list?api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
      ),
      axios.get(
        `https://api.themoviedb.org/3/discover/${media_type}?&primary_release_year=2021&api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
      ),
    ])
      .then(([genreRes, featuredRes]) => {
        setGenreData(genreRes.data.genres);
        setFeaturedMedia(shuffleMedia(featuredRes.data.results)[0]);
      })
      .catch((err) => console.error(err));
  }, [media_type]);

  return (
    <>
      <FeaturedMedia
        title="The Movie"
        overview="In theaters now and on HBO Stream."
        video="https://www.youtube.com/embed/573GCxqkYEg?autoplay=1&mute=1&loop=1"
      />
      <GenreNavMenu media_type={media_type} genres={genreData} />
      <DynamicMediaRow
        title="For You"
        imgWidth="240px"
        imgHeight="360px"
        media_type={media_type}
      />
    </>
  );
}

export default AuthCheck(Media);
