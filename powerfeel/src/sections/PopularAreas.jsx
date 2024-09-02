import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import areas1 from "../assets/img/StockCake-Lantern Festival Glow_1725131583.jpg";
import areas2 from "../assets/img/StockCake-Lantern Festival Joy_1725131613.jpg";
import areas3 from "../assets/img/StockCake-Lanterns Lighting Sky_1725131592.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}
      >
        <div
          id="top"
          className=" w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1 data-aos="zoom-in" className=" text-red-500 dark:text-white">
              POPULAR AREAS
            </h1>
            <h1
              data-aos="zoom-in"
              className=" text-black  text-[40px] font-semibold leading-10 mt-4 dark:text-white"
            >
              Explore most <br /> popular areas
            </h1>
          </div>
          <div className=" grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${areas1})` }}
              className=" h-[400px] bg-cover bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${areas2})` }}
              className=" h-[400px] bg-cover bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${areas3})` }}
              className=" h-[400px] bg-cover bg-center rounded-xl"
            ></div>
          </div>
        </div>
        <div
          id="bottom"
          className=" w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-center gap-6"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className=" flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className=" text-black text-5xl font-semibold dark:text-white">
              Weddings
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className=" flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className=" text-black text-5xl font-semibold dark:text-white">
              Birthdays
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className=" flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className=" text-black text-5xl font-semibold dark:text-white">
              Anniversaries
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
