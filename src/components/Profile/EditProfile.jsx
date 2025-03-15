import React, { useRef, useState } from "react";
import { CiCamera } from "react-icons/ci";

export default function EditProfile() {
  // Image handling
  const [image, setImage] = useState();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const imageHandler = () => document.getElementById("IMG").click();
  const cameraIcon = () =>
    document.getElementById("cameraIcon").classList.add("-z-10");
  return (
    <div>
      <div className="xl:px-20 lg:px-12 md:px-10 px-4 py-20 my-20 rounded-[10px] bg-[#2c2c2c]">
        {/* <!--- Image Div start ---> */}
        <div
          className="img-div m-auto rounded-full bg-[#131212]"
          style={{
            backgroundImage: image ? `url(${image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100px",
            height: "100px",
            cursor: "pointer",
            position: "relative",
          }}
          onClick={imageHandler}
          onChange={cameraIcon}
        >
          <CiCamera
            className="camera-icon text-[40px] absolute top-[30%] right-[30%] text-[#ff640a]"
            id="cameraIcon"
          />
          <input
            type="file"
            accept="image/*"
            id="IMG"
            required
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        {/* <!--- Image Div end ---> */}
        {/* <!--- Form start ---> */}
        <form className="mt-6">
          <div className="form-group">
            <div className="label mb-2 text-[#ff640a] text-[17px]">
              <label htmlFor="Gender">Gender</label>
            </div>
            <div className="select">
              <select
                name="Gender"
                id="Gender"
                className="w-full h-[48px] text-[17px] rounded-lg text-[#ff640a] p-3 border-[#ff640a] border bg-[#131212] outline-none appearance-none"
              >
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-6">
            <div className="label mb-2 text-[#ff640a] text-[17px]">
              <label htmlFor="Name">Name</label>
            </div>
            <div className="inputs w-full lg:flex gap-3">
              <div className="input w-full">
                <input
                  name="Name"
                  id="Name"
                  type="text"
                  required
                  placeholder="Enter First Name"
                  className="w-full h-[48px] text-[17px] rounded-lg text-[#ff640a] p-3 border-[#ff640a] border bg-[#131212] outline-none placeholder:text-[#ff640a]"
                />
              </div>
              <div className="input w-full lg:mt-0 mt-3">
                <input
                  name="Name"
                  id="Name"
                  type="text"
                  required
                  placeholder="Enter Last Name"
                  className="w-full h-[48px] text-[17px] rounded-lg text-[#ff640a] p-3 border-[#ff640a] border bg-[#131212] outline-none placeholder:text-[#ff640a]"
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-6">
            <div className="label mb-2 text-[#ff640a] text-[17px]">
              <label htmlFor="Date of Birth">Date of Birth</label>
            </div>
            <div className="input w-full">
              <input
                name="Date of Birth"
                id="Date of Birth"
                type="date"
                required
                placeholder="Enter First Name"
                className="w-full h-[48px] text-[17px] rounded-lg text-[#ff640a] p-3 border-[#ff640a] border bg-[#131212] outline-none placeholder:text-[#ff640a]"
              />
            </div>
          </div>
          <div className="form-group mt-6">
            <div className="label mb-2 text-[#ff640a] text-[17px]">
              <label htmlFor="Email">Email</label>
            </div>
            <div className="input w-full">
              <input
                type="email"
                name="Email"
                id="Email"
                required
                placeholder="Enter Email"
                className="w-full h-[48px] text-[17px] rounded-lg text-[#ff640a] p-3 border-[#ff640a] border bg-[#131212] outline-none placeholder:text-[#ff640a]"
              />
            </div>
          </div>
          <div className="form-group mt-6">
            <div className="label mb-2 text-[#ff640a] text-[17px]">
              <label htmlFor="Contact No.">Contact No.</label>
            </div>
            <div className="input w-full">
              <input
                type="text"
                name="Contact No."
                id="Contact No."
                required
                placeholder="Enter Contact No."
                className="w-full h-[48px] text-[17px] rounded-lg text-[#ff640a] p-3 border-[#ff640a] border bg-[#131212] outline-none placeholder:text-[#ff640a]"
              />
            </div>
          </div>
          <div className="form-group mt-6">
            <div className="label mb-2 text-[#ff640a] text-[17px]">
              <label htmlFor="Description">Description</label>
            </div>
            <div className="input w-full">
              <textarea
                name="Description"
                id="Description"
                required
                placeholder="Enter Description"
                className="resize-none w-full h-[300px] text-[17px] rounded-lg text-[#ff640a] p-3 border-[#ff640a] border bg-[#131212] outline-none placeholder:text-[#ff640a]"
              ></textarea>
            </div>
          </div>
          <div className="form-group mt-6 lg:text-start text-center">
            <button
              type="submit"
              class="px-8 z-30 py-4 bg-[#131212] rounded-md text-white relative ease-linear font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#ff640a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-1000 after:transition-all after:duration-1000 transition-all duration-1000 text-2xl"
            >
              Hover Me
            </button>
          </div>
        </form>
        {/* <!--- Form end ---> */}
      </div>
    </div>
  );
}
