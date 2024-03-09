import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="p-12">
      {/* Circle
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-96 w-96 z-0 blur-lg absolute top-1/8 right-4 transform translate-x-4"></div>
      */}
      <div className=" w-full flex justify-center items-center text-center">
        <div className="text-center align">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I'm Jasraj!
          </h1>

          <p className="text-slate-400 text-base sm:text-lg mb-6 lg:text-xl">
            Full Stack Developer
          </p>

          {/* <div className="align">
            <Link href="#contact">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white m-2">
                Contact
              </button>
            </Link>

            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white m-2">
              Download CV
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
