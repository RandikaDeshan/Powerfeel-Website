import React, { useEffect } from "react";
import aboutImg from "../assets/img/StockCake-Sky Lanterns Ascend_1725129341.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent"
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutImg}
          alt="about image"
          className=" rounded-2xl lg:w-[500px] lg:h-[600px]"
        />
      </div>
      <div className=" fles flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" className=" text-red-500 dark:text-white pb-9">
          WHO WE ARE
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className=" text-black text-[40px] font-semibold leading-10 dark:text-white pb-9"
        >
          Lorem, ipsum dolor sit amet consectetur
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className=" text-xl text-gray-600 dark:text-white text-justify pb-9"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
          praesentium fuga ratione officia itaque a repellendus labore libero
          vero qui sapiente, excepturi repellat dignissimos eaque!
        </p>
        <button className=" bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300">
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default About;
