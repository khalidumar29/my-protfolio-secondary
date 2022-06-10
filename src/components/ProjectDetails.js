import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data";
import { RiGithubLine } from "react-icons/ri";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.filter((p) => p.id === id);
  const { name, link, sampleImage } = project[0];
  return (
    <section className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full'>
        <div className='lg:flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              {name}
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'></p>
            {link && (
              <div className='flex justify-between gap-5'>
                <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                  <a target='_blanck' href={link[0]}>
                    Live Link
                  </a>
                </button>
                <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                  <a
                    className='text-xl flex  items-center'
                    target='_blanck'
                    href={link[1]}
                  >
                    <RiGithubLine className='mr-2 text-primary' />{" "}
                    Repository(Client)
                  </a>
                </button>
                <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                  <a
                    className='text-xl flex items-center'
                    target='_blanck'
                    href={link[2]}
                  >
                    <RiGithubLine className='mr-2 text-primary' />{" "}
                    Repository(Server)
                  </a>
                </button>
              </div>
            )}
          </div>
          <div className='lg:flex md:mt-5 sm:mt-5 lg:ml-[10px] flex-1 justify-center items-center h-full'>
            <div
              id='carouselExampleCaptions'
              class='carousel slide relative'
              data-bs-ride='carousel'
            >
              <div class='carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4'>
                <button
                  type='button'
                  data-bs-target='#carouselExampleCaptions'
                  data-bs-slide-to='0'
                  class='active'
                  aria-current='true'
                  aria-label='Slide 1'
                ></button>
                <button
                  type='button'
                  data-bs-target='#carouselExampleCaptions'
                  data-bs-slide-to='1'
                  aria-label='Slide 2'
                ></button>
                <button
                  type='button'
                  data-bs-target='#carouselExampleCaptions'
                  data-bs-slide-to='2'
                  aria-label='Slide 3'
                ></button>
              </div>
              <div class='carousel-inner relative w-full overflow-hidden'>
                <div class='carousel-item active relative float-left w-full'>
                  <img src={sampleImage[1]} class='block w-full' alt='...' />
                </div>
                <div class='carousel-item relative float-left w-full'>
                  <img src={sampleImage[0]} class='block w-full' alt='...' />
                </div>
                <div class='carousel-item relative float-left w-full'>
                  <img src={sampleImage[2]} class='block w-full' alt='...' />
                </div>
              </div>
              <button
                class='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
                type='button'
                data-bs-target='#carouselExampleCaptions'
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
                data-bs-target='#carouselExampleCaptions'
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
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
