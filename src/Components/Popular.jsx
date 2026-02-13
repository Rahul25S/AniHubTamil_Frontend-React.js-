import React from "react";
import { movieData } from "./MovieData";

const Popular = () => {
  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <h1 className="font-nsansHead text-3xl mt-14 p-1 md:text-4xl md:p-4 text-white">
        POPULAR
      </h1>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {movieData.map((movie) => (
          <div
            key={movie.redirectLink}
            className="w-[200px] h-[380px] p-1 lg:w-[270px] lg:h-[450px] lg:p-2 bg-gray-800 rounded-md shadow-lg cursor-pointer transform hover:scale-105 transition duration-300
"
            onClick={() => (window.location.href = movie.redirectLink)}
          >
            <img
              src={movie.imageSrc}
              alt={movie.title}
              className="w-full h-[80%] object-cover rounded-md"
            />

            <div className="flex gap-2 mt-2">
              <span className="px-2 text-sm lg:py-1 lg:text-xs text-white bg-gray-600 rounded">
                {movie.label1}
              </span>
              <span className="px-2 text-sm lg:py-1 lg:text-xs text-white bg-blue-600 rounded">
                {movie.label2}
              </span>
              <span className="text-sm px-2 lg:py-1 text-white bg-green-600 rounded">
                {movie.label3}
              </span>
              <span className="text-sm px-2 lg:py-1 text-white bg-pink-700 rounded">
                {movie.label4}
              </span>
            </div>

            <h3 className="mt-4 text-xs lg:text-sm text-white text-center">
              {movie.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;