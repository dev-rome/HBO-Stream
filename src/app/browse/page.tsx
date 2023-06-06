"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import FeaturedImage from "@/src/components/ui/FeaturedImage";
import AuthCheck from "@/src/features/AuthCheck";
import axios from "axios";
import { shuffleMedia } from "@/utils/shuffle";

const DynamicMediaRow = dynamic(() => import("@/src/components/MediaRow"));

interface FeaturedMediaProps {
  title: string;
  name: string;
  backdrop_path: string;
  overview: string;
}

function Browse() {
  const [featuredMedia, setFeaturedMedia] = useState<FeaturedMediaProps | null>(
    null
  );
  const { id } = useParams();

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&with_genres=${id}&api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
    ).then((res) => {
      setFeaturedMedia(shuffleMedia(res.data.results)[0]);
      console.log(res.data.results);
    }).catch((err) => console.error(err));
  }, [id]);

  if (!featuredMedia) {
    return null;
  }

  const { title, name, backdrop_path, overview } = featuredMedia;

  return (
    <>
       <FeaturedImage
        title={title || name}
        overview={overview}
        image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      />
      <DynamicMediaRow
        title="For You"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
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
      <DynamicMediaRow
        title="Drama"
        genreId="18"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
      <DynamicMediaRow
        title="Family"
        genreId="10751"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />

      <DynamicMediaRow
        title="Mystery"
        genreId="9648"
        imgWidth="240px"
        imgHeight="360px"
        media_type="movie"
      />
    </>
  );
}

export default AuthCheck(Browse);
