import React from "react";
import { FaCode, FaRegEye } from "react-icons/fa6";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: ProjectCardProps) => {
  return (
    <div>
      <div
        className="h-36 sm:h-52 lg:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-neutral-700 rounded-t-xl sm:hidden flex bg-opacity-80 sm:group-hover:flex sm:group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-zinc-300 hover:border-white group/link"
            target="_blank"
          >
            <FaCode className="h-8 w-8 text-zinc-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-zinc-300 hover:border-white group/link"
          >
            <FaRegEye className="h-8 w-8 text-zinc-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
