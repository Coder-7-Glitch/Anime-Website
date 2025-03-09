import React from "react";

export default function About() {
  return (
    <div>
      <div className="xl:px-20 lg:px-12 md:px-10 px-4 py-20">
        <div className="grid grid-cols-2 gap-y-12">
          <div className="content">
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
          </div>
          <div className="img w-full">
            <img
              src="/assets/icons/Favicon.svg"
              alt=""
              className="w-[40%] ml-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
