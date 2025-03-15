import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Password() {
  const [isShowPass1, setisShowPass1] = useState(false);
  const [isShowPass2, setisShowPass2] = useState(false);
  const [isShowPass3, setisShowPass3] = useState(false);
  const firstField = useRef();
  const secondField = useRef();
  const thirdField = useRef();

  const handleSubmit = (event) => {
    if (secondField.current.value !== thirdField.current.value) {
      alert("Fields do not match!");
      event.preventDefault();
      return;
    }
    alert("Form submitted successfully!");
  };

  const togglePassword = (fieldRef, setShowPass) => {
    const newType = fieldRef.current.type === "password" ? "text" : "password";
    fieldRef.current.type = newType;
    setShowPass(newType === "text");
  };

  return (
    <div>
      <div className="xl:px-20 lg:px-12 md:px-10 px-4 py-20">
        <div className="heading flex items-center gap-3 py-8">
          <div className="w-[3px] h-[30px] bg-[#ff640a]"></div>
          <h1 className="sm:text-2xl min-[320px]:text-lg">
            Change Current Password
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8">
          <div>
            <form className="w-full" onSubmit={handleSubmit}>
              {/* Current Password Field */}
              <div className="form-group w-full text-white relative">
                <div className="label mb-[0.5rem] w-full">
                  <label htmlFor="Current Password">Current Password</label>
                </div>
                <div className="input w-full">
                  <input
                    type="password"
                    ref={firstField}
                    className="bg-[#2c2c2c] w-full h-[47px] rounded-[10px] border-0 outline-none px-[30px] py-[10px]"
                    required
                  />
                </div>
                <div
                  className="show-icon absolute top-[58%] right-[3%] text-xl cursor-pointer"
                  onClick={() => togglePassword(firstField, setisShowPass1)}
                >
                  {isShowPass1 ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              {/* New Password Field */}
              <div className="form-group w-full mt-4 text-white relative">
                <div className="label mb-[0.5rem] w-full">
                  <label htmlFor="New Password">New Password</label>
                </div>
                <div className="input w-full">
                  <input
                    type="password"
                    ref={secondField}
                    className="bg-[#2c2c2c] w-full h-[47px] rounded-[10px] border-0 outline-none px-[30px] py-[10px]"
                    required
                  />
                </div>
                <div
                  className="show-icon absolute top-[58%] right-[3%] text-xl cursor-pointer"
                  onClick={() => togglePassword(secondField, setisShowPass2)}
                >
                  {isShowPass2 ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="form-group w-full mt-4 text-white relative">
                <div className="label mb-[0.5rem] w-full">
                  <label htmlFor="Confirm Password">Confirm Password</label>
                </div>
                <div className="input w-full">
                  <input
                    type="password"
                    ref={thirdField}
                    className="bg-[#2c2c2c] w-full h-[47px] rounded-[10px] border-0 outline-none px-[30px] py-[10px]"
                    required
                  />
                </div>
                <div
                  className="show-icon absolute top-[58%] right-[3%] text-xl cursor-pointer"
                  onClick={() => togglePassword(thirdField, setisShowPass3)}
                >
                  {isShowPass3 ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <div className="form-group w-full mt-4 text-center lg:text-start">
                <button
                  className="relative mt-3 inline-flex items-center justify-center text-center px-8 py-4 overflow-hidden tracking-tighter text-white bg-[#2c2c2c] rounded-md group"
                  type="submit"
                >
                  <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-[#ff640a] rounded-full group-hover:w-56 group-hover:h-56" />
                  <span className="absolute inset-0 w-full h-full rounded-lg" />
                  <span className="relative text-base font-semibold">
                    Change Pin
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="lg:mt-8">
            <div className="change-pin-card px-6 py-4 lg:w-[379px] w-full lg:h-[157px] rounded-[10px] bg-[#2c2c2c]">
              <p className="text-[#ff640a] font-normal">
                Password must contains:
              </p>
              <ul className="mt-4">
                <li>A minimum of 8 characters</li>
                <li>At least 1 number</li>
                <li>At least 1 upper case &amp; symbol</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}