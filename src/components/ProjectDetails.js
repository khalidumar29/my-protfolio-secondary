import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data";
import { RiGithubLine } from "react-icons/ri";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.filter((p) => p.id === id);
  const { name, link } = project[0];
  console.log(name, project);
  return (
    <section className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              {name}
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'></p>
            {link && (
              <div className='flex justify-between gap-5'>
                <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                  <a
                    className='text-xl flex'
                    target='_blanck'
                    href='https://drive.google.com/file/d/1yZqTtaXK9RR-Cp-yCqWRIG1jnhn3Ml4i/view?usp=sharing'
                  >
                    Live Link
                  </a>
                </button>
                <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                  <a
                    className='text-xl flex  items-center'
                    target='_blanck'
                    href='https://drive.google.com/file/d/1yZqTtaXK9RR-Cp-yCqWRIG1jnhn3Ml4i/view?usp=sharing'
                  >
                    <RiGithubLine className='mr-2 text-primary' />{" "}
                    Repository(Client)
                  </a>
                </button>
                <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                  <a
                    className='text-xl flex items-center'
                    target='_blanck'
                    href='https://drive.google.com/file/d/1yZqTtaXK9RR-Cp-yCqWRIG1jnhn3Ml4i/view?usp=sharing'
                  >
                    <RiGithubLine className='mr-2 text-primary' />{" "}
                    Repository(Server)
                  </a>
                </button>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
