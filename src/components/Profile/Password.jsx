import React from "react";

export default function Password() {
  return (
    <div>
      <div className="xl:px-20 lg:px-12 md:px-10 px-4 py-20">
        <div className="heading flex items-center gap-3 py-8">
          <div className="w-[3px] h-[30px] bg-[#ff640a]"></div>
          <h1 className="sm:text-2xl min-[320px]:text-lg">Change Current Password</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8">
          <div>
          <form className="w-full">
            <div className="form-group w-full text-white">
              <div className="label mb-[0.5rem] w-full">
                <label htmlFor="Current Password">Current Password</label>
              </div>
              <div className="input w-full">
                <input type="text" name="Current Password" id="Current Password" className="bg-[#2c2c2c] w-full h-[47px] rounded-[10px] border-0 outline-none px-[30px] py-[10px]" />
              </div>
            </div>
            <div className="form-group w-full mt-4 text-white">
              <div className="label mb-[0.5rem] w-full">
                <label htmlFor="New Password">New Password</label>
              </div>
              <div className="input w-full">
                <input type="text" name="New Password" id="New Password" className="bg-[#2c2c2c] w-full h-[47px] rounded-[10px] border-0 outline-none px-[30px] py-[10px]" />
              </div>
            </div>
            <div className="form-group w-full mt-4 text-white">
              <div className="label mb-[0.5rem] w-full">
                <label htmlFor="Confirm Password">Confirm Password</label>
              </div>
              <div className="input w-full">
                <input type="text" name="Confirm Password" id="Confirm Password" className="bg-[#2c2c2c] w-full h-[47px] rounded-[10px] border-0 outline-none px-[30px] py-[10px]" />
              </div>
            </div>
          </form>
          </div>
          <div className="lg:mt-8">
            <div className="change-pin-card px-6 py-4 lg:w-[379px] w-full lg:h-[157px] rounded-[10px] bg-[#2c2c2c]">
              <p className="text-[#ff640a] font-normal">Password must contains:</p>
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
