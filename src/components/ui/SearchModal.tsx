"use client";

import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import ImageHolder from "@/src/components/ImageHolder";
import Link from "next/link";
import useHBOContext from "@/src/hooks/useHBOContext";
import axios from "axios";

interface MovieProps {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  media_type: string;
}

const SearchModal = () => {
  const [searchData, setSearchData] = useState<MovieProps[]>([]);
  const [popularSearches, setPopularSearches] = useState<MovieProps[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const hboContext = useHBOContext();
  const showSearchModal = hboContext?.showSearchModal || false;
  const toggleSearchModal = hboContext?.toggleSearchModal || (() => {});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
      )
      .then((res) => {
        setPopularSearches(
          res.data.results.filter((item: MovieProps, i: number) => i < 15)
        );
        setShowResults(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchModalClose = () => {
    toggleSearchModal?.();
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=9003a9a7916fe23de95525fc04f2b35d&language=en-US`
      )
      .then((res) => {
        setSearchData(
          res.data.results.filter(
            (item: MovieProps, i: number) =>
              item.media_type === "movie" || item.media_type === "tv"
          )
        );
        setShowResults(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderPopularResults = () => {
    return popularSearches.map((item: MovieProps, i: number) => (
      <Link
        href={`movie/${item.id}`}
        key={item.id}
        onClick={handleSearchModalClose}
      >
        <div className="relative w-[240px] h-[360px]">
          <ImageHolder
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt={item.title || item.name}
            width={240}
            height={360}
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
      </Link>
    ));
  };

  const renderSearchResults = (results: MovieProps[]) => {
    return results.map((item: MovieProps, i: number) => (
      <Link
        href={`${item.media_type}/${item.id}`}
        key={item.id}
        onClick={handleSearchModalClose}
      >
        <div className="relative w-[240px] h-[360px]">
          <ImageHolder
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt={item.title || item.name}
            width={240}
            height={360}
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
      </Link>
    ));
  };

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

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
              value={searchTerm}
              onChange={handleSearchInput}
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
            {showResults && searchData.length >= 1
              ? renderSearchResults(searchData)
              : renderPopularResults()}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
