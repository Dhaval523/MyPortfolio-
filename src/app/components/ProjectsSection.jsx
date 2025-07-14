"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 2,
    title: "CritiQ – Movie Review Platform",
    description:
      "A full-stack web app to rate, review, and track movies with release reminders.",
    image: "/images/projects/critiQ.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dhaval523/critiQ.git",
    previewUrl: "https://critiq-2.onrender.com/", // if deployed
  },
  // {
  //   id: 2,
  //   title: "Agastya – Hostel Chatbot",
  //   description:
  //     "AI chatbot for hostel students providing mess schedules, announcements & maintenance help.",
  //   image: "/images/projects/chatbot.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "#", // add if hosted or GitHub
  //   previewUrl: "#",
  // },
  {
    id: 1,
    title: "AssignMate – Assignment System",
    description:
      "Web app for students & teachers to manage, submit, and review assignments and feedback.",
    image: "/images/projects/assignmate.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dhaval523/Assign_Submit.git",
    previewUrl: "#", // Add if deployed
  },

  // {
  //   id:4 ,
  //   title: "Portfolio Website",
  //   description:
  //     "My personal portfolio website built with Next.js, showcasing my work and skills.",
  //   image: "/images/projects/portfolio.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/Dhaval523", // replace with portfolio repo
  //   previewUrl: "https://yourportfolio.vercel.app/", // add actual link
  // },
 {
  id: 3,
  title: "Shubh Yatra – Trip Planning Web App",
  description:
    "A group travel planning platform that lets users create trip polls, vote on destinations, chat, and finalize bookings with a step-by-step workflow.",
  image: "/images/projects/subhyatra.png", // Replace with actual image path
  tag: ["All", "Web"],
  gitUrl: "https://github.com/Dhaval523", // Replace with actual repo if available
  previewUrl: "https://shubhyatra.vercel.app", // Add deployed URL if available
},

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
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
