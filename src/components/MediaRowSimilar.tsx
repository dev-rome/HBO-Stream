import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { useParams } from 'next/navigation';
import axios from "axios";
import Imageholder from "@/src/components/ImageHolder";

interface MediaRowProps {
  title: string;
  imgWidth: string;
  imgHeight: string;
}

const MediaRowSimilar = ({ title, imgWidth, imgHeight }: MediaRowProps) => {
  const [singleMedia, setSingleMedia] = useState<any[]>([]);

    const params = useParams();

  const shuffleMedia = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  useEffect(() => {
      axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}`
      )
      .then((res) => {
        setSingleMedia(shuffleMedia(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const renderImages = singleMedia.map((item) => {
    return (
        <div key={item.id} className="relative">
          <div
            style={{ width: imgWidth, height: imgHeight }}
            className="overflow-hidden flex items-center justify-center relative"
          >
            <Imageholder
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt="Placeholder description"
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

export default MediaRowSimilar;