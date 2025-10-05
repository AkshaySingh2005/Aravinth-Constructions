import { useState } from "react";
import {
  Building,
  House,
  Handshake,
  ChevronDown,
  ChevronUp,
  Pickaxe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectImages } from "@/constants/projects";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      image: projectImages.project4,
      title: "Residential House",
      icon: <House size={20} />,
      alt: "Project 4",
    },
    {
      id: 2,
      image: projectImages.project3,
      title: "Residential House",
      icon: <House size={20} />,
      alt: "Community Works",
    },
    {
      id: 3,
      image: projectImages.project2,
      title: "Residential House",
      icon: <House size={20} />,
      alt: "Commercial Buildings",
    },
    {
      id: 4,
      image: projectImages.project1,
      title: "Community Works - Ashramam",
      icon: <Handshake size={20} />,
      alt: "Residential Houses",
    },
    {
      id: 5,
      image: projectImages.project7,
      title: "Past work",
      icon: <Pickaxe size={20} />,
      alt: "Project 7",
    },
    {
      id: 6,
      image: projectImages.project5,
      title: "Past work",
      icon: <Pickaxe size={20} />,
      alt: "Project 6",
    },
    {
      id: 7,
      image: projectImages.project6,
      title: "Commercial work",
      icon: <Building size={20} />,
      alt: "Project 5",
   
    },
    {
      id: 8,
      image: projectImages.project8,
      title: "Past work",
      icon: <Pickaxe size={20} />,
      alt: "Project 8",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="pb-10">
      <div className="text-3xl md:text-4xl font-bold font-sans flex justify-center items-center pt-8 md:pt-14 pb-6">
        Featured Projects
      </div>

      {/* Responsive description */}
      <div className="text-center px-4 md:px-20 lg:px-32 xl:px-64">
        <p className="text-lg md:text-xl pb-2">
          Explore our portfolio of successful construction projects that
          showcase our expertise, quality craftsmanship, and commitment to
          excellence.
        </p>
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg overflow-hidden shadow-lg relative group hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              src={project.image}
              alt={project.alt}
            />
            {/* Icon overlay */}
            <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
              <div className="text-[#2596be] font-bold text-center">
                {project.icon}
              </div>
            </div>
            {/* Title overlay on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* See More / See Less Button */}
      <div className="flex justify-center mt-8">
        <Button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#2596be] hover:bg-[#47b6df] text-white font-bold px-6 py-3 flex items-center gap-2"
        >
          {showAll ? (
            <>
              <ChevronUp size={20} />
              See Less
            </>
          ) : (
            <>
              <ChevronDown size={20} />
              See More Projects
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Projects;
