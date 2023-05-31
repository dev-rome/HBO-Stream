import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import axios from "axios";

interface MediaRowProps {
  title: string;
  imgWidth: string;
  imgHeight: string;
  genreId?: string;
}

const MediaRow = ({ title, imgWidth, imgHeight, genreId }: MediaRowProps) => {
  const [media, setMedia] = useState<any[]>([]);

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
    Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&primary_release_year=2021&api_key=9003a9a7916fe23de95525fc04f2b35d`
      ),
      axios.get(
        `https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&api_key=9003a9a7916fe23de95525fc04f2b35d`
      ),
    ])
      .then(([movieRes, tvShowRes]) => {
        const data = [...movieRes.data.results, ...tvShowRes.data.results];
        setMedia(shuffleMedia(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [genreId]);

  const renderImages = media.map((item) => {
    return (
      <div key={item.id} className="relative">
        <div
          style={{ width: imgWidth, height: imgHeight }}
          className="overflow-hidden flex items-center justify-center"
        >
          <img
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt="Placeholder description"
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

export default MediaRow;
