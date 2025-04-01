import React from "react";
import Profile from "../data/Profile.json";

export default function Personal() {
  return (
    <div className="w-full">
      {Profile.Personal.map((personal, i) => (
        <div className="personal-details-card flex gap-8 w-full" key={i}>
          <div className="first-div bg-[#131212] px-3 py-6 rounded-[10px] w-full">
            <div className="img">
              <img
                src={personal.userImg}
                alt=""
                className="rounded-full w-[40%] mx-auto"
              />
            </div>
            <div className="content text-center mt-4">
              <div className="name">
                <h1 className="text-[1.5rem] font-medium">{personal.name}</h1>
              </div>
              <div className="gender-and-age mt-4 flex gap-1 justify-center">
                <div className="gender">
                  <h1 className="text-lg font-normal">{personal.Gender},</h1>
                </div>
                <div className="age">
                  <h1 className="text-lg font-normal">
                    {personal.Age} years old
                  </h1>
                </div>
              </div>
              <div className="date-of-birth mt-2 flex gap-1 justify-center">
                <div className="date">
                  <h1 className="text-lg font-normal">{personal.birthDate}</h1>
                </div>
                <div className="month">
                  <h1 className="text-lg font-normal">{personal.birthMonth},</h1>
                </div>
                <div className="year">
                  <h1 className="text-lg font-normal">{personal.birthYear}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
