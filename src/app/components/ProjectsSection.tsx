"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Chat Website",
    description: "Real time messaging via Pusher, utilizing NextJS and MongoDB",
    image: "/images/projects/chatWebsite.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JasrajCode/chat-app",
    previewUrl: "https://chat-app-six-mocha.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Website created with NextJS showcasing my portfolio",
    image: "/images/projects/portfolioWebsite.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JasrajCode/My-Portfolio",
    previewUrl: "https://my-portfolio-tan-one-83.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Website",
    description: "Created using HTML, CSS and JavaScript using OpenWeatherMap API",
    image: "/images/projects/weatherWebsite.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JasrajCode/Weather-App",
    previewUrl: "https://jasrajcode.github.io/Weather-App/",
  },
  {
    id: 4,
    title: "Notes Website",
    description: "Supports CRUD operations with notes using NextJS and MongoDB",
    image: "/images/projects/notesWebsite.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JasrajCode/Notes-App",
    previewUrl: "https://notes-app-rho-rose.vercel.app/",
  },
];

function ProjectsSection() {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="pt-24" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;