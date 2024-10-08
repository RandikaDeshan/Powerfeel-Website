import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroImg from "../assets/img/StockCake-Lanterns Light Sky_1725129746.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="home"
          className=" w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <h1
            data-aos="zoom-in"
            className=" text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px] capitalize"
          >
            Celebrate your special occasions with us
          </h1>
          <p
            data-aos="zoom-in"
            className=" text-white text-xl lg:pr-[500px] pr-0"
          >
            - Let your celebrations light up the night as you release beautiful
            lanterns into the sky, creating a magical and breathtaking display
            that captures the spirit of your moments -
          </p>
        </section>
      </div>

      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } z-10`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          <div className=" w-full">
            <h1 className=" text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectOption"
              id="selectOption"
              className=" bg-white p-2 border-b-[1px] w-full mt-2 borser-[#c9c7c] text-gray-500 text-sm"
            >
              <option value="" disabled selected>
                Select Type
              </option>
              <option value="Option1">With Text</option>
              <option value="Option1">Plane</option>
            </select>
          </div>
          <div className=" w-full">
            <h1 className=" text-black font-semibold dark:text-white">Color</h1>
            <select
              name="selectOption"
              id="selectOption"
              className=" bg-white p-2 border-b-[1px] w-full mt-2 borser-[#c9c7c] text-gray-500 text-sm"
            >
              <option value="" disabled selected>
                Select Color
              </option>
              <option value="Option1">Red</option>
              <option value="Option1">White</option>
              <option value="Option1">Yellow</option>
            </select>
          </div>
          <div className=" w-full">
            <h1 className=" text-black font-semibold dark:text-white">Size</h1>
            <select
              name="selectOption"
              id="selectOption"
              className=" bg-white p-2 border-b-[1px] w-full mt-2 borser-[#c9c7c] text-gray-500 text-sm"
            >
              <option value="" disabled selected>
                Select Size
              </option>
              <option value="Option1">Small</option>
              <option value="Option1">Large</option>
              <option value="Option1">Extra Large</option>
            </select>
          </div>
          <div className=" w-full">
            <button className=" bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
