import React from "react";
import { BsPlayFill } from "react-icons/bs";

export default function Lookism() {
  return (
    <div>
      <div className="inset-0 hero-slider-gradient z-10 h-[100vh] w-full">
        <div className="hero-content pt-[11rem] md:pl-[13rem] pl-12">
          <div className="logo">
            <img
              src="/assets/img/Lookism logo.jpeg"
              alt="IMG"
              className="w-[200px] sm:w-[250px] rotate-12"
            />
          </div>
          <div className="movie-description flex items-center mt-8">
            <span className="age-verification bg-zinc-700 text-zinc-200 font-workSans font-semibold text-sm px-2 py-1 rounded">
              16+
            </span>
            <span className="text-white font-black mx-2">·</span>
            <div className="dub text-zinc-400 flex gap-1">
              <span>Sub</span>
              <span>|</span>
              <span>Dub</span>
            </div>
            <span className="text-white font-black mx-2">·</span>
            <span className="text-zinc-400">Action</span>
          </div>
          <div className="movie-summary">
            <p className="hidden md:block mt-3 text-gray-300 w-[40%]">
              Desperate to defend her village from the demon king, Reiko offers
              herself to a 5,000-year-old dragon for his help in exchange, but
              the flame-breathing beast is vegetarian and a total weakling.
            </p>
          </div>
          <div className="watch-btn">
            <button
              type="button"
              className="mt-4 bg-[#ff640a] flex items-center gap-3 px-6 py-2 rounded font-workSans font-medium"
            >
              <div className="icon">
                <BsPlayFill className="text-[28px]" />
              </div>
              <div className="content">Start Watching</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
