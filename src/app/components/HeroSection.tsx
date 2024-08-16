import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="p-12">
      <div className=" w-full flex justify-center items-center text-center">
        <div className="text-center align">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I'm Jasraj!
          </h1>

          <p className="text-slate-400 text-base sm:text-lg mb-6 lg:text-xl">
            Full Stack Developer
          </p>

          <div className="align">
            <Link href="#contact">
              <button className="px-6 py-3 w-1/2 sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white m-2">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
