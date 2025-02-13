import Image from "next/image";
import attendanceMonitoring from "../assets/images/attendanceMonitoring.png";
import { CircleCheck, Github } from "lucide-react";
import { Card } from "./Card";

const projects = [
  {
    name: "Attendance Monitoring System1",
    year: "2024",
    heading: "SaaS Project",
    features: [
      { title: "Improves efficiency in attendance recording" },
      { title: "Segregate defaulters" },
      { title: "Quick attendance feature" },
    ],
    image: attendanceMonitoring,
  },
  {
    name: "Attendance Monitoring System2",
    year: "2024",
    heading: "SaaS Project",
    features: [
      { title: "Improves efficiency in attendance recording" },
      { title: "Segregate defaulters" },
      { title: "Quick attendance feature" },
    ],
    image: attendanceMonitoring,
  },
  {
    name: "Attendance Monitoring System3",
    year: "2024",
    heading: "SaaS Project",
    features: [
      { title: "Improves efficiency in attendance recording" },
      { title: "Segregate defaulters" },
      { title: "Quick attendance feature" },
    ],
    image: attendanceMonitoring,
  },
];

export const ProjectSection = () => {
  return (
    <div className="bg-black text-white pb-16 lg:py-24">
      <div className="container">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl text-center mt-6 font-semibold">
            Showcasing My Work
          </h2>
          <p className="text-center text-white/50 md:text-lg max-w-md mx-auto mt-4">
            Explore a collection of projects where I blend creativity with
            functionality to build impactful digital experiences.
          </p>
          <div className="flex flex-col mt-10 gap-16 md:mt-20">
            {projects.map((project) => (
              <Card
                className="pl-8 pr-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
                key={project.name}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r  from-[#2456D6] to-[#60A5FA] inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.name}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-2xl mt-2 md:mt-5 md:text-3xl">
                      {project.heading}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4">
                      {project.features.map((res) => (
                        <li
                          className="flex gap-2 text-sm text-white/50"
                          key={res.title}
                        >
                          <CircleCheck />
                          <span>{res.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#">
                      <button className="bg-white text-gray-950 rounded-xl font-semibold h-12 w-full items-center justify-center mt-8 inline-flex md:w-auto px-8 gap-2">
                        <Github />
                        <span>Github Link</span>
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      className="mt-8 -mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


{/* <div
                className="bg-gray-900 rounded-3xl relative z-0 after:z-10 after:content-[''] overflow-hidden after:absolute after:inset-0 after:border-2 after:border-offset-2 after:rounded-3xl after:border-white/20 pl-8 pr-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20"
                key={project.name}
              ></div> */}