import React from "react";

export default function RowCard() {
  return (
    <div>
      <div className="xl:px-20 lg:px-12 md:px-10 px-4 py-20 lg:flex gap-10">
        <div className="img">
          <img
            src="/assets/img/ViralHit2.jpg"
            alt=""
            className="w-full rounded h-auto min-h-[250px] max-h-[300px]"
          />
        </div>
        <div className="content mt-8 w-full">
          <h1 className="transition-all duration-100 hover:underline text-xl md:text-2xl active:text-[#ff640a] cursor-pointer">
            Anyway, I'm Falling in Love with You.
          </h1>
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
          <p className="text-[#888888] mt-4 text-sm md:text-[15px] md:w-[70%]">
            Several thousand years after a mysterious phenomenon that turns all
            of humanity to stone, the extraordinarily intelligent,
            science-driven boy, Senku Ishigami, awakens. Facing a world of stone
            and the total collapse of civilization,
          </p>
          <div className="mt-4">
            <button className="px-4 py-1 md:py-2 md:px-4 relative overflow-hidden bg-gradient-to-r bg-[#ff640a] text-b font-semibold rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:skew-x-12">
              <span className="absolute top-0 left-0 w-full h-full bg-[#ff640a]"></span>
              <span className="relative z-10 text-sm md:text-[16px]">
                Watch Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
