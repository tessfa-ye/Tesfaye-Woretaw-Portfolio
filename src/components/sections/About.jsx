import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Flutter",
    "Dart",
  ];
  const backendSkills = ["Python", "Node.js", "Express", "Java"];
  const apiSkills = ["RESTful APIs", "GraphQL", "Firebase"];
  const databaseSkills = ["MongoDB", "Firebase", "PostgreSQL", "MySQL"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web and
              mobile applications and creating innovative solutions for building
              seamless user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🎨 Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {" "}
                  {frontendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}{" "}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">⚙️ Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {" "}
                  {backendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}{" "}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🗄️ Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {" "}
                  {databaseSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}{" "}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  🌐 API & Cloud Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {" "}
                  {apiSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  <strong>Bachelor's Degree in Software Engineering</strong> -
                  Arbaminch University (2019-2024)
                </li>
                <li className="mt-6">
                  <strong>Relevant Coursework:</strong> Data Structure and
                  Algorithm, Web Development, Mobile App Development, Machine
                  Learning, Cloud Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    <strong>
                      Internship at Amhara Innovation and Technology Institute
                    </strong>{" "}
                    - Software Engineering Intern
                  </h4>
                  <span className="text-gray-400">
                    July 2023 - September 2023
                  </span>
                  <p className="mt-2">
                    Assisted in the development of Mobile applications using
                    Flutter and Node.js.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    <strong>Mobile Application Developer</strong> - INSA
                    (2024-present)
                  </h4>
                  <p>
                    Developed and maintained mobile applications using Flutter,
                    ensuring a seamless user experience and adherence to best
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
