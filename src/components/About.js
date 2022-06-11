import React from "react";

// import img
import Image from "../assets/img/about.png";

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Khalid Umar
              </h2>
              <p className='mb-4 text-accent'>Junior Web Developer</p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Hi There,
                <br />
                Thanks for visiting my protfolio I’m Khalid, a student of
                computer science and technology also I’m a professional UI/UX &
                web developer. I love working on UI/UX, and web development. I
                get ideas for my work from the depths of my mind. Which follows
                modern design methods.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              <a href='#contact'>Contact me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
