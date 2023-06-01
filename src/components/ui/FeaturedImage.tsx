import { FaPlay, FaPlus } from "react-icons/fa";
import Image from "next/image";

interface FeaturedImageProps {
  title: string;
  overview: string;
  image: string;
}

const FeaturedImage = ({ title, overview, image }: FeaturedImageProps) => {
  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <Image
        src={image}
        alt={title}
        fill={true}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute w-full h-full z-[2] bg-background-movie flex items-end px-4 md:px-12 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
        <div className="content-wrapper">
          <h2 className="text-5xl md:text-6xl text-color-secondary font-bold mb-4">
            {title}
          </h2>
          <p className="max-w-2xl hidden md:block text-color-secondary font-bold mb-2">
            {overview}
          </p>
          <div className="flex items-center gap-3 mb-20">
            <button
              className="bg-color-secondary w-10 h-10 rounded-[50%] flex justify-center items-center transform transition duration-300 ease-in-out hover:scale-110"
              onClick={handleButtonClick}
            >
              <FaPlay />
            </button>
            <button
              className="bg-color-secondary w-10 h-10 rounded-[50%] flex justify-center items-center transform transition duration-300 ease-in-out hover:scale-110"
              onClick={handleButtonClick}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;