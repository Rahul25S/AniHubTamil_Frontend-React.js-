import React from "react";
import PosterImage from "../assets/1.jpg";
import Popular from "../Components/Popular";

const onepiece = () => {
  return (
    <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
      <div className="mx-auto p-2 md:p-6">
        <div className="max-w-6xl flex flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg items-center gap-x-4">
          <div className="md:w-2/5 p-4 ">
            <h1 className="md:text-4xl text-2xl font-nsansHead font-bold md:mb-4">
              One Piece
            </h1>
            <img
              src={PosterImage} // Use the imported image
              alt="One Piece Poster"
              className="md:w-72 w-40 h-auto rounded-lg"
            />
          </div>

          <div className="md:w-4/5 flex justify-center p-4">
            <div className="w-full md:h-[400px] h-[200px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/X3CR6L9uLd4?si=ysRZ81F401vNkm1H"
                title="Anime Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="max-w-6xl bg-gray-800 text-white p-6 mt-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-300 mt-2">
            Gold Roger was known as the "Pirate King," the strongest and most
            infamous being to have sailed the Grand Line. The capture and
            execution of Roger by the World Government brought a change
            throughout the world. His last words before his death revealed the
            existence of the greatest treasure in the world, One Piece. It was
            this revelation that brought about the Grand Age of Pirates, men who
            dreamed of finding One Piece—which promises an unlimited amount of
            riches and fame—and quite possibly the pinnacle of glory and the
            title of the Pirate King. Enter Monkey Luffy, a 17-year-old boy who
            defies your standard definition of a pirate. Rather than the popular
            persona of a wicked, hardened, toothless pirate ransacking villages
            for fun, Luffy's reason for being a pirate is one of pure wonder:
            the thought of an exciting adventure that leads him to intriguing
            people and ultimately, the promised treasure. Following in the
            footsteps of his childhood hero, Luffy and his crew travel across
            the Grand Line, experiencing crazy adventures, unveiling dark
            mysteries and battling strong enemies, all in order to reach the
            most coveted of all fortunes—One Piece. [Written by MAL Rewrite]
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p>
              <strong>⭐ Rating:</strong> 8.62/10
            </p>
            <p>
              <strong>📺 Premiered:</strong> Fall 1999
            </p>
            <p>
              <strong>🎭 Genres:</strong> Action, Adventure, Comedy, Drama,
              Fantasy, Shounen, Super Power.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default onepiece;
