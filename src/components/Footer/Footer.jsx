import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-200 bg-[#2c2c2c] body-font mt-20">
        <div className="px-6 md:px-12 lg:px-20 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 text-center lg:text-start">
            <div className="w-full">
              <Link to={"/"}>
                <div className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
                  <img
                    src="/assets/icons/Favicon.svg"
                    alt=""
                    className="w-[2rem]"
                  />
                  <h1 className="ml-3 text-[#ff640a] text-xl font-K2D">
                    AnimeSaga
                  </h1>
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  We provide high-quality anime streaming with fast updates and
                  a seamless experience.
                </p>
              </Link>
            </div>
            <div>
              <h1 className="font-medium text-[#ff640a] tracking-widest text-[18px] mb-2">
                Pages
              </h1>
              <ul>
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-[#ff640a]">
                    Home
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/about-page"}
                    className="text-gray-400 hover:text-[#ff640a]"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/latest-anime"}
                    className="text-gray-400 hover:text-[#ff640a]"
                  >
                    Latest Anime
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/news-page"}
                    className="text-gray-400 hover:text-[#ff640a]"
                  >
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-medium text-[#ff640a] tracking-widest text-[18px] mb-2">
                Browse
              </h1>
              <ul>
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-[#ff640a]">
                    Action & Adventure
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-[#ff640a]">
                    Comedy
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-[#ff640a]">
                    Romance
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-[#ff640a]">
                    Movies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-medium text-[#ff640a] tracking-widest text-[18px] mb-2">
                Account
              </h1>
              <ul>
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-[#ff640a]">
                    Watchlist
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-[#ff640a]">
                    History
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-[#ff640a]">
                    My Profile
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to={"/"} className="text-gray-400 hover:text-[#ff640a]">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-medium text-[#ff640a] tracking-widest text-[18px] mb-2">
                Contact Us
              </h1>
              <ul>
                <li className="mt-1">
                  <Link
                    target="_blank"
                    to={"/"}
                    className="text-gray-400 hover:text-[#ff640a]"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    target="_blank"
                    to={"/"}
                    className="text-gray-400 hover:text-[#ff640a]"
                  >
                    Youtube
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    target="_blank"
                    to={"/"}
                    className="text-gray-400 hover:text-[#ff640a]"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    target="_blank"
                    to={"/"}
                    className="text-gray-400 hover:text-[#ff640a]"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-4 px-5 text-center bg-[#ff640a]">
          <h1 className="text-black text-[16px] font-medium">
            © Copyright 2025 Anime Saga. All rights reserved
          </h1>
        </div>
      </footer>
    </div>
  );
}
