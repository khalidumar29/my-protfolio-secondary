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
    <div className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto mt-24'>
        <div>
          <div
            id='carouselExampleCrossfade'
            class='carousel slide carousel-fade relative'
            data-bs-ride='carousel'
          >
            <div class='carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4'>
              <button
                type='button'
                data-bs-target='#carouselExampleCrossfade'
                data-bs-slide-to='0'
                class='active'
                aria-current='true'
                aria-label='Slide 1'
              ></button>
              <button
                type='button'
                data-bs-target='#carouselExampleCrossfade'
                data-bs-slide-to='1'
                aria-label='Slide 2'
              ></button>
              <button
                type='button'
                data-bs-target='#carouselExampleCrossfade'
                data-bs-slide-to='2'
                aria-label='Slide 3'
              ></button>
            </div>
            <div class='carousel-inner relative w-full overflow-hidden'>
              <div class='carousel-item active float-left w-full'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp'
                  class='block w-full'
                  alt='Wild Landscape'
                />
              </div>
              <div class='carousel-item float-left w-full'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/new/slides/042.webp'
                  class='block w-full'
                  alt='Camera'
                />
              </div>
              <div class='carousel-item float-left w-full'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/new/slides/043.webp'
                  class='block w-full'
                  alt='Exotic Fruits'
                />
              </div>
            </div>
            <button
              class='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
              type='button'
              data-bs-target='#carouselExampleCrossfade'
              data-bs-slide='prev'
            >
              <span
                class='carousel-control-prev-icon inline-block bg-no-repeat'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Previous</span>
            </button>
            <button
              class='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
              type='button'
              data-bs-target='#carouselExampleCrossfade'
              data-bs-slide='next'
            >
              <span
                class='carousel-control-next-icon inline-block bg-no-repeat'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
        <div className=''>
          <h1 className='text-2xl'>{name}</h1>
          <div className='flex'>
            <a href={link} className='btn btn-ghost'>
              Live Link
            </a>
            <button className='btn'>
              <RiGithubLine className='text-xl' />
              Repository(Client)
            </button>
            <button className='btn btn-ghost'>
              <RiGithubLine className='text-xl' />
              Repository(Client)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
