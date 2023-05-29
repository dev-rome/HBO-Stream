import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import useMenuContext from "@/src/hooks/useMenuContext";

const SearchModal = () => {
  const menuContext = useMenuContext();
  const showSearchModal = menuContext?.showSearchModal || false;
  const toggleSearchModal = menuContext?.toggleSearchModal || (() => {});

  const testLoop = (Component: () => JSX.Element, limit: number) => {
    let output = [];
    for (let i = 0; i < limit; i++) {
      output.push(<Component key={i} />);
    }
    return output;
  };

  const handleSearchModalClose = () => {
    toggleSearchModal?.();
  };

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const ListItem = () => (
    <div className="relative w-[240px] h-[360px]">
      <img
        className="w-full h-full object-cover object-center"
        src="https://placehold.co/600x400"
        alt="Placeholder description"
      />
      <div className="group absolute top-0 left-0 w-full h-full flex justify-center items-center bg-background-movie-poster opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-90">
        <button
          aria-label="Play"
          className="transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 hover:scale-125 text-white text-4xl"
        >
          <FaPlay />
        </button>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {showSearchModal && (
        <motion.div
          className="fixed top-16 left-1/2 transform -translate-x-1/2 z-10 py-5 px-12 bg-color-primary h-[75vh] max-w-6xl mx-auto overflow-y-scroll no-scrollbar"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="mb-3">
            <input
              className="bg-transparent border-0 border-b-2 border-color-secondary outline-none caret-color-secondary text-color-secondary"
              type="text"
              placeholder="Search for a title"
              value=""
            />
            <button
              aria-label="Close"
              className="absolute top-5 right-7 text-2xl text-color-secondary"
              onClick={handleSearchModalClose}
            >
              <AiOutlineClose />
            </button>
          </div>
          <h2 className="text-xl text-color-secondary mb-6">
            Popular Searches
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-2 max-w-full w-calc-width">
            {testLoop(ListItem, 10)}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
