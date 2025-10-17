import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">
                Real-Time Messaging App
              </h3>
              <p className="text-gray-400 mb-4">
                A modern full-stack chat app built with a featuring of real-time
                messaging, file sharing, Online/offline status + typing
                indicator, Profile picture & bio editing, Read receipts &
                message timestamps and profile management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB", "Socket.IO"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project →{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">E-Commerce Platform</h3>
              <p className="text-gray-400 mb-4">
                A full-featured e-commerce platform built with Next.js and
                Firebase, offering product listings, shopping cart
                functionality, and user authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Firebase", "Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project →{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">
                MyFitness – Health & Workout Tracker
              </h3>
              <p className="text-gray-400 mb-4">
                A responsive fitness tracking app that helps users log workouts,
                monitor progress, and stay motivated with interactive goals and
                charts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Dart", "Node.js", "MongoDB"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project →{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
