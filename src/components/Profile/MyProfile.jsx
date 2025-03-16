import React from "react";
import Personal from "./Profile_Cards/Personal";
import Other from "./Profile_Cards/Other";
import Notes from "./Profile_Cards/Notes";

export default function MyProfile() {
  return (
    <div>
      <div className="xl:px-20 lg:px-12 md:px-10 px-4 py-20 my-20 rounded-[10px] bg-[#2c2c2c]">
        <div className="details lg:flex gap-3 w-full">
          <div className="personal lg:w-[33%] w-full">
            <Personal />
          </div>
          <div className="other-and-notes lg:w-[64%] w-full lg:mt-0 mt-4">
            <Other />
            <div className="notes">
              <Notes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
