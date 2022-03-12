import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';

const App = () => {
  return (
    <div className='bg-white max-w-[1440px] mx-auto h-screen'>
      <Header />
      <Hero />
      <Companies />
    </div>
  );
};

export default App;
