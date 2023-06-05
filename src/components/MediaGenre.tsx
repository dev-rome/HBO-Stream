
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { shuffleMedia } from "@/utils/shuffle";
import Link from "next/link";
import axios from "axios";
import Imageholder from "@/src/components/ImageHolder";

interface MediaRowProps {
  title: string;
  imgWidth: string;
  imgHeight: string;
  genreId?: string;
  media_type: string;
  page?: number;
}

const MediaGenre = ({
  title,
  imgWidth,
  imgHeight,
  genreId,
  media_type,
  page
}: MediaRowProps) => {
  const [media, setMedia] = useState<any[]>([]);

  useEffect(() => {
    axios
    .get(
      `https://api.themoviedb.org/3/discover/${media_type}?with_genres=${genreId}&sort_by=popularity.desc&primary_release_year=2021&page=${page}&api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
    )
      .then((res) => {
        const data = [...res.data.results];
        setMedia((prevMedia) => [...prevMedia, ...shuffleMedia(data)]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [genreId, media_type, page]);

  const renderImages = media.map((item) => {
    const mediaType = media_type === "movie" ? "movie" : "tv";
    return (
      <Link href={`${mediaType}/${item.id}`} key={item.id}>
        <div className="relative">
          <div
            style={{ width: imgWidth, height: imgHeight }}
            className="overflow-hidden flex items-center justify-center relative"
          >
            <Imageholder
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.title || item.name}
              width={parseInt(imgWidth)}
              height={parseInt(imgHeight)}
            />
          </div>
          <div className="group absolute top-0 left-0 w-full h-full flex justify-center items-center bg-background-movie-poster opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-90">
            <button className="transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 hover:scale-125 text-white text-4xl">
              <FaPlay />
            </button>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="py-5 pl-4 lg:pl-12">
      <h3 className="text-color-secondary font-medium mb-4">{title}</h3>
      <div className="min-w-full w-calc-width flex flex-nowrap gap-3 no-scrollbar">
        {renderImages}
      </div>
    </div>
  );
};

export default MediaGenre;