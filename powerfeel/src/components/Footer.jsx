import React from "react";
import { useDarkMode } from "../components/DarkModeContext";
import props1 from "../assets/img/StockCake-Lanterns Fill Sky_1725129363.jpg";
import props2 from "../assets/img/StockCake-Lanterns Light Sky_1725129746.jpg";
import {
  FaArrowUp,
  FaBuilding,
  FaFacebookF,
  FaFax,
  FaInstagram,
  FaMobile,
  FaMoon,
  FaSun,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-scroll";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className=" flex flex-col justify-center items-start gap-5">
          <h1 className=" text-white text-2xl font-semibold">About us</h1>
          <p className=" text-slate-200 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            nostrum. Perferendis eveniet hic aspernatur unde earum iure quae
            quia doloremque.
          </p>
          <div
            id="social-icons"
            className=" flex justify-start items-center gap-4 mt-4"
          >
            <div className=" p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebookF className=" size-5" />
            </div>
            <div className=" p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className=" size-5" />
            </div>
            <div className=" p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTiktok className=" size-5" />
            </div>
            <div className=" p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube className=" size-5" />
            </div>
          </div>
          <h1 className=" text-white mt-8">
            Copyright Real Estate, All Rights Reserved
          </h1>
        </div>
        <div className=" flex flex-col justify-center items-start gap-5">
          <h1 className=" text-white text-2xl font-semibold">Contact Us</h1>
          <div className=" flex justify-center items-center gap-3">
            <FaBuilding className=" text-white size-5" />
            <p className=" text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              fuga.
            </p>
          </div>
          <div className=" flex justify-center items-center gap-3">
            <FaMobile className=" text-white size-5" />
            <p className=" text-slate-200">+94 84 290 2901</p>
          </div>
          <div className=" flex justify-center items-center gap-3">
            <FaFax className=" text-white size-5" />
            <p className=" text-slate-200">9494 45949</p>
          </div>
          <div className=" flex justify-center items-center gap-3">
            <IoMdMail className=" text-white size-5" />
            <p className=" text-slate-200">realestate@gmail.com</p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-start gap-5">
          <h1 className=" text-white text-2xl font-semibold">
            Latest Categories
          </h1>
          <div className=" flex justify-center items-center gap-4">
            <img
              src={props1}
              alt=""
              className=" w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className=" text-lg text-white">Bithday Wishes</h1>
              <p className=" text-slate-400">$ 280.98</p>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-4">
            <img
              src={props2}
              alt=""
              className=" w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className=" text-lg text-white">Weddings</h1>
              <p className=" text-slate-400">$ 480.98</p>
            </div>
          </div>
        </div>
      </footer>

      <div>
        <button
          onClick={toggleDarkMode}
          className=" flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-[159px]"
        >
          {darkMode ? (
            <FaMoon size={25} className=" text-black" />
          ) : (
            <FaSun size={25} className=" text-black" />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
