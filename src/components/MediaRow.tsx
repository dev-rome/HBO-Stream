import { FaPlay } from "react-icons/fa";

interface MediaRowProps {
  title: string;
  imgWidth: string;
  imgHeight: string;
}

const MediaRow = ({ title, imgWidth, imgHeight }: MediaRowProps) => {
  const imagesData = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ];

  return (
    <div className="py-5 pl-4 lg:pl-12">
      <h3 className="text-color-secondary font-medium mb-4">{title}</h3>
      <div className="min-w-full w-calc-width flex flex-nowrap gap-3 overflow-x-scroll no-scrollbar">
        {imagesData.map((item, index) => (
          <div key={index} className="relative">
            <div
              style={{ width: imgWidth, height: imgHeight }}
              className={`overflow-hidden flex items-center justify-center`}
            >
              <img
                className="w-full h-full object-cover"
                src={item}
                alt="Placeholder description"
              />
            </div>
            <div className="group absolute top-0 left-0 w-full h-full flex justify-center items-center bg-background-movie-poster opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-90">
              <button className="transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 hover:scale-125 text-white text-4xl">
                <FaPlay />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaRow;
