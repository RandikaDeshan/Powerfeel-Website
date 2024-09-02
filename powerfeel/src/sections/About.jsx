import React, { useEffect, useState } from "react";
import aboutImg from "../assets/img/StockCake-Sky Lanterns Ascend_1725129341.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { Modal } from "@mui/material";
import { FaXmark } from "react-icons/fa6";
import about1 from "../assets/img/StockCake-Lanterns Fill Sky_1725129363.jpg";
import owner from "../assets/images/StockCake-Intense Gaze Portrait_1725284550.jpg";

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
            Powerfeel Sky Lanterns
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className=" text-xl text-gray-600 dark:text-white text-justify pb-9"
          >
            "We are the leading seller of premium sky lanterns in Sri Lanka,
            known for our unmatched quality, vibrant designs, and safe,
            eco-friendly products. Illuminate your celebrations with the best
            sky lanterns, perfect for every special occasion!"
          </p>
          <button
            onClick={handleOpen}
            className=" bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300"
          >
            READ MORE
          </button>
        </div>
      </section>

      <Modal aria-expanded={true} open={open}>
        <div className=" w-screen h-screen bg-transparent p-5 lg:p-8 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className=" flex flex-row justify-end items-center pb-5">
            <div className=" bg-gray-400 rounded-full justify-center items-center flex">
              <button onClick={handleClose} className=" p-[6px]">
                <FaXmark className=" size-7" />
              </button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className={`${
              darkMode ? "dark bg-gray-800 " : "light bg-white"
            } w-full lg:w-3/4 h-[90%] overflow-y-scroll rounded-lg scrollbar-none`}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="200"
              className={`${
                darkMode ? "dark text-white" : "light text-black"
              } text-[30px] text-center font-bold pt-10 p-7`}
            >
              Fowerfeel Sky Lanterns
            </h1>
            <div className=" m-5 p-3 grid grid-cols-1 lg:grid-cols-2 lg:p-12 bg-red-100">
              <div className=" lg:p-3">
                <p
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className=" text-justify p-3 pb-5 font-semibold"
                >
                  "We are the leading seller of premium sky lanterns in Sri
                  Lanka, known for our unmatched quality, vibrant designs, and
                  safe, eco-friendly products. Illuminate your celebrations with
                  the best sky lanterns, perfect for every special occasion!"
                </p>
                <img
                  src={about1}
                  alt="aboutImg"
                  className="  rounded-lg"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
              <div className=" lg:p-3">
                <p
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className=" text-justify p-3 pb-5 font-semibold"
                >
                  Our sky lanterns are crafted using premium materials, ensuring
                  they are safe, reliable, and easy to use. We offer a wide
                  variety of colors, shapes, and designs to suit any occasion,
                  all carefully crafted with attention to detail. Our lanterns
                  are made from eco-friendly materials, making them not just
                  beautiful but also safe for the environment.
                </p>
                <p
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className=" text-justify p-3 pb-5 font-semibold"
                >
                  What sets us apart is our commitment to quality and customer
                  satisfaction. We source only the best materials to create
                  lanterns that light up the sky with elegance and style. Our
                  products undergo rigorous testing to ensure safety, providing
                  you with peace of mind as you enjoy the beauty of our
                  lanterns. Choose us for the best sky lanterns in Sri Lanka and
                  experience unmatched quality and service. Illuminate your
                  skies with our stunning lanterns and make your events
                  unforgettable!"
                </p>
              </div>
            </div>
            <div className=" m-5 p-3  grid grid-cols-1 lg:grid-cols-2 bg-red-100">
              <div className=" p-5">
                <img src={owner} alt="" className=" rounded-full" />
              </div>
              <div
                data-aos="zoom-in"
                className=" flex flex-col justify-center items-center"
              >
                <h1 className=" text-center font-bold text-[25px] lg:text-[35px]">
                  Owner
                </h1>
                <p className=" py-5 text-center font-semibold text-[20px] lg:text-[30px]">
                  Mr.Rahsma Lakshan
                </p>
                <p className=" text-justify font-semibold text-[15px] lg:text-[20px] p-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora consequuntur omnis ipsam nobis distinctio corporis
                  commodi corrupti soluta excepturi eum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default About;
