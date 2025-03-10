import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";

export default function Navbar() {
  // <!-- Navbar start -->
  const [showNav, setShowNav] = useState();
  const offCanvas = useRef();
  function toggleNav() {
    setShowNav(!showNav);
    if (showNav === true) {
      offCanvas.current.style.left = "0px";
    } else {
      offCanvas.current.style.left = "-800px";
    }
  }
  // <!-- Navbar start -->
  // <!- -Dropdown start -->
  const dropdownLists = [
    "Adventure",
    "Most Popular",
    "Comedy",
    "Romance",
    "Action",
    "Movies",
    "Latest Shows",
  ];
  const profileLists = [
    "My Profile",
    "Sponsorship",
    "Password",
    "Edit Profile",
    "My list",
    "History",
    "Help And Support",
    "Switch Account",
    "Delete Account",
    "Log Out",
  ];
  const [isOpen, setIsOpen] = useState();
  const dropdownBtn = useRef();

  function closeDropdown() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleDropdownClose(e) {
      if (dropdownBtn.current && !dropdownBtn.current.contains(e.target)) {
        closeDropdown();
      }
    }
    return () => {
      document.removeEventListener("mousedown", handleDropdownClose);
    };
  }, []);
  // <!-- Dropdown end -->
  // <!-- Profile Dropdown start -->
  const profileBtn = useRef();
  const [isProfileOpen, setisProfileOpen] = useState();

  function closeProfile() {
    setisProfileOpen(false);
  }

  useEffect(() => {
    function handleProfileClose(e) {
      if (profileBtn.current && !profileBtn.current.contains(e.target)) {
        closeProfile();
      }
    }

    document.addEventListener("mousedown", handleProfileClose);

    return () => {
      document.removeEventListener("mousedown", handleProfileClose);
    };
  }, []);

  // <!-- Profile Dropdown end -->

  return (
    <div>
      <header className="bg-zinc-800 text-zinc-200 h-[70px]">
        <div className="h-full flex gap-8 items-center px-4 sm:px-7 md:px-9 lg:px-14 max-w-7xl mx-auto justify-between">
          <div className="left-text flex items-center gap-5 me-auto">
            <Link
              to={"/"}
              className="logo me-auto lg:me-0 flex gap-2 justify-center items-center h-full"
            >
              <div className="img w-8">
                <img src="/assets/icons/Favicon.svg" alt="IMG" />
              </div>
              <div className="name">
                <h1 className="font-K2D text-2xl text-[#FF640A] hidden md:block">
                  AnimeSaga
                </h1>
              </div>
            </Link>
            {/* <!-- lg-flex Navbar List start */}
            <ul className="hidden lg:flex gap-5 me-auto">
              <li>
                <Link to={"/"} className="font-medium text-[17px]">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about-page"} className="font-medium text-[17px]">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/latest-anime"} className="font-medium text-[17px]">
                  Latest Anime
                </Link>
              </li>
              {/* <!-- Dropdown start */}
              <li>
                <div className="relative inline-block text-left w-full active:bg-zinc-800">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full justify-between items-center gap-2 font-medium text-[17px] rounded-md focus:outline-none"
                  >
                    Browse
                    <FaChevronDown
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5">
                      <ul className="py-1 text-[15px] text-zinc-200">
                        {dropdownLists.map((dropdownList) => (
                          <li
                            key={dropdownList}
                            className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
                            onClick={closeDropdown}
                          >
                            {dropdownList}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* <!-- Dropdown end */}
              </li>
              <li>
                <Link to={"/news-page"} className="font-medium text-[17px]">
                  News
                </Link>
              </li>
            </ul>
            {/* <!-- lg-flex Navbar List end */}
            {/* <!-- Mobile Navbar List start */}
            <ul
              className="transition-all duration-300 py-10 block lg:hidden gap-5 me-auto absolute top-[70px] h-[100vh] left-[-800px] w-full sm:w-[320px] bg-zinc-900 z-[3]"
              ref={offCanvas}
            >
              <li className="font-medium text-[17px] px-5 py-3 w-full active:bg-zinc-800">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-medium text-[17px] px-5 py-3 w-full active:bg-zinc-800">
                <Link to={"/about-page"}>About</Link>
              </li>
              <li className="font-medium text-[17px] px-5 py-3 w-full active:bg-zinc-800">
                <Link to={"/latest-anime"}>Latest Anime</Link>
              </li>
              {/* <!-- Dropdown start */}
              <li>
                <div className="relative inline-block text-left px-5 py-3 w-full active:bg-zinc-800">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full justify-between items-center gap-2 font-medium text-[17px] rounded-md focus:outline-none"
                  >
                    Browse
                    <FaChevronDown />
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5">
                      <ul className="py-1 text-[15px] text-zinc-200">
                        {dropdownLists.map((dropdownList) => (
                          <li
                            key={dropdownList}
                            className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
                            onClick={closeDropdown}
                          >
                            {dropdownList}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* <!-- Dropdown end */}
              </li>
              <li className="font-medium text-[17px] px-5 py-3 w-full active:bg-zinc-800">
                <Link to={"/"}>News</Link>
              </li>
            </ul>
            {/* <!-- Mobile Navbar List end */}
          </div>
          <div className="right-text">
            <ul className="flex items-center gap-8">
              <li>
                <IoBookmarkOutline size={30} className="cursor-pointer" />
              </li>
              <li>
                <MdOutlineSearch size={30} className="cursor-pointer" />
              </li>
              <li>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setisProfileOpen(!isProfileOpen)}
                  >
                    <img
                      src="/assets/img/images.jpeg"
                      alt="IMG"
                      className="w-10 rounded-full"
                    />
                  </button>
                  {isProfileOpen && (
                    <div className="absolute sm:left-[-4rem] left-[-6rem] z-10 mt-2 w-48 rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5">
                      <ul className="py-1 text-[15px] text-zinc-200">
                        {profileLists.map((profileLists) => (
                          <li
                            key={profileLists}
                            className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
                            onClick={closeProfile}
                          >
                            {profileLists}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
          <button type="button" onClick={toggleNav}>
            <GiHamburgerMenu className="text-3xl lg:hidden" />
          </button>
        </div>
      </header>
    </div>
  );
}
