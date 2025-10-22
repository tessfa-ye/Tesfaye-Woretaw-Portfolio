import React, { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const projectsData = [
  {
    title: "Real-Time Messaging App",
    description:
      "A modern full-stack mobile chat app built with real-time messaging, file sharing, online/offline status, profile management, and read receipts.",
    images: ["chat.jpg", "chat2.jpg", "chat3.jpg", "chat4.jpg", "chat5.jpg"],
    techs: ["Flutter", "Node.js", "Express", "Firebase", "Socket.IO"],
    github: "https://github.com/tessfa-ye/we-chat",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with Next.js and Firebase, including cart, authentication, and responsive UI.",
    images: ["/e-commerce.jpeg"],
    techs: ["Next.js", "Firebase", "Tailwind CSS"],
    github: "#",
  },
  {
    title: "MyFitness – Health & Workout Tracker",
    description:
      "A responsive fitness tracking app to log workouts, monitor progress, and stay motivated with interactive charts.",
    images: [
      "fit1.jpg",
      "fit2.jpg",
      "fit3.jpg",
      "fit4.jpg",
      "fit5.jpg",
      "fit6.jpg",
      "fit7.jpg",
      "fit8.jpg",
    ],
    techs: ["Flutter", "Dart", "Node.js", "MongoDB"],
    github: "https://github.com/tessfa-ye/my-fitness",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();

  const handleScroll = () => {
    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    setCurrentIndex(index);
  };

  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
      <h3 className="text-xl font-bold mb-4">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Horizontal Carousel */}
      <div
        className="relative overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        <div className="flex gap-2">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Project ${idx}`}
              className="w-full min-w-full h-100 object-contain rounded-lg snap-center flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {project.images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentIndex ? "bg-blue-500" : "bg-gray-400/50"
            }`}
          ></span>
        ))}
      </div>

      {/* GitHub link */}
      <div className="py-6 flex justify-between items-center">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};
