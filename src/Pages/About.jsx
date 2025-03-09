import React, { useRef } from "react";
import { HiMiniXMark } from "react-icons/hi2";

export default function About() {
  const Card = useRef();
  const Main = useRef();
  function dBlockCard() {
    Card.current.classList.remove("hidden");
    Card.current.classList.add("block");
  }
  function dNoneCard() {
    Card.current.classList.add("hidden");
    Card.current.classList.remove("block");
  }

  return (
    <div>
      <div
        className="xl:px-20 lg:px-12 md:px-10 px-4 py-20 relative"
        ref={Main}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
          <div className="content text-center lg:text-start">
            <p>
              AnimeSaga is a thrilling and immersive anime streaming platform
              that offers a vast collection of anime series and movies, catering
              to both casual viewers and hardcore fans. With a user-friendly
              interface and high-quality streaming options, AnimeSaga allows
              fans to explore classic and newly released anime across various
              genres, including action, romance, fantasy, and sci-fi. The
              platform is known for its regularly updated library, ensuring that
              viewers have access to the latest episodes shortly after their
              release in Japan. Subbed and dubbed versions are available, making
              it accessible to a global audience.
            </p>
            <button className="relative mt-3 inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-[#2c2c2c] rounded-md group">
              <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-[#ff640a] rounded-full group-hover:w-56 group-hover:h-56" />
              <span className="absolute inset-0 w-full h-full rounded-lg" />
              <span
                className="relative text-base font-semibold"
                onClick={dBlockCard}
              >
                Read More
              </span>
            </button>
          </div>
          <div className="img w-full">
            <img
              src="/assets/icons/Favicon.svg"
              alt=""
              className="w-[40%] lg:ml-auto mx-auto"
            />
          </div>
        </div>
        {/* Card start */}
        <div
          className="card-div bg-[#00000088] w-full h-full fixed left-0 top-0 hidden"
          ref={Card}
        >
          <div className="card bg-[#2c2c2c] rounded-xl lg:text-start text-center px-12 py-6 absolute md:w-[50%]  top-[25%] md:left-[25%] shadow-white shadow-lg">
            <HiMiniXMark
              className="mb-6 text-[2.5rem] text-white ml-auto cursor-pointer"
              onClick={dNoneCard}
            />
            <p className="mb-2">
              AnimeSaga is a thrilling and immersive anime streaming platform
              that offers a vast collection of anime series and movies, catering
              to both casual viewers and hardcore fans. With a user-friendly
              interface and high-quality streaming options, AnimeSaga allows
              fans to explore classic and newly released anime across various
              genres, including action, romance, fantasy, and sci-fi. The
              platform is known for its regularly updated library, ensuring that
              viewers have access to the latest episodes shortly after their
              release in Japan. Subbed and dubbed versions are available, making
              it accessible to a global audience.
            </p>
            <p>
              Beyond just streaming, AnimeSaga fosters a vibrant community where
              anime enthusiasts can discuss their favorite shows, share reviews,
              and stay updated on upcoming releases. The platform also features
              personalized recommendations based on viewing history, helping
              users discover hidden gems they might have missed. With a
              commitment to delivering an ad-free and seamless experience,
              AnimeSaga has quickly gained popularity among anime lovers looking
              for a reliable and engaging way to enjoy their favorite content.
            </p>
          </div>
        </div>
        {/* Card end */}
      </div>
    </div>
  );
}
