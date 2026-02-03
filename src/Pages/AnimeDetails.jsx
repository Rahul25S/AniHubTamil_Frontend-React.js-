import React from "react";
import { movieData } from "../Components/MovieData";

const AnimeDetail = () => {
  const currentPath = window.location.pathname;

  const anime = movieData.find(
    (movie) => movie.redirectLink === currentPath
  );

  if (!anime) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Anime not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto mt-14">

        <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg p-4 gap-6">
          <div className="md:w-1/3">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              {anime.title}
            </h1>
            <img
              src={anime.imageSrc}
              alt={anime.title}
              className="w-40 md:w-72 rounded-lg"
            />
          </div>

          <div className="md:w-2/3">
            <div className="w-full h-56 md:h-96">
              <iframe
                src={anime.trailer}
                width="100%"
                height="100%"
                title={anime.title}
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 mt-6 rounded-lg">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-300 mt-2">{anime.description}</p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p><strong>⭐ Rating:</strong> {anime.rating}</p>
            <p><strong>📺 Premiered:</strong> {anime.premiered}</p>
            <p><strong>🎭 Genres:</strong> {anime.genres}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AnimeDetail;
