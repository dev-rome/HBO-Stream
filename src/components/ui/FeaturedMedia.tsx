import { FaPlay } from "react-icons/fa";

interface FeaturedMediaProps {
  title: string;
  location: string;
  video: string;
}

const FeaturedMedia = ({ title, location, video }: FeaturedMediaProps) => {
  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden ">
      <iframe
        width="100%"
        height="100%"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute z-[1] scale-150"
      ></iframe>
      <div className="absolute w-full h-full z-[2] bg-background-movie flex items-end px-12 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
        <div className="content-wrapper">
          <h2 className="text-6xl text-color-secondary font-bold mb-4">
            {title}
          </h2>
          <p className="text-sm text-color-secondary font-bold mb-2">
            Now Playing.
          </p>
          <p className="text-sm text-color-secondary font-bold mb-2">
            {location}
          </p>
          <div className="flex items-center gap-3 mb-20">
            <button
              className="bg-color-secondary w-10 h-10 rounded-[50%] flex justify-center items-center transform transition duration-300 ease-in-out hover:scale-110"
              onClick={handleButtonClick}
            >
              <FaPlay />
            </button>
            <button
              className="bg-color-tertiary flex justify-center items-center w-24 h-10 rounded-3xl text-xs text-color-secondary uppercase font-bold transform transition duration-300 ease-in-out hover:scale-110"
              onClick={handleButtonClick}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMedia;
