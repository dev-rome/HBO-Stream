import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const JustAdded = () => {
  const testLoop = (Component: () => JSX.Element, limit: number) => {
    let output = [];
    for (let i = 0; i < limit; i++) {
      output.push(<Component key={i} />);
    }
    return output;
  };

  const ListItem = () => (
    <div>
      <div className="relative w-[300px] h-[400px]">
        <img
          className="w-[300px] h-[400px] object-cover object-center"
          src="https://placehold.co/600x400"
          alt="Placeholder description"
        />
        <div className="group absolute top-0 left-0 w-full h-full flex justify-center items-center bg-background-movie-poster opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-90">
          <button className="transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 hover:scale-125 text-white text-4xl">
            <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-5 pl-4 lg:pl-12">
      <h3 className="text-color-secondary font-medium mb-4">Just Added</h3>
      <div className="min-w-full w-calc-width flex flex-nowrap gap-3 overflow-x-scroll no-scrollbar">
        {testLoop(ListItem, 10)}
      </div>
    </div>
  );
};

export default JustAdded;
