import React from 'react';
import assets from '../../assets/assets';

const WhoAreWe = () => {
  return (
    <section className='max-w-[1280px] mx-auto px-6 mt-20 mb-10 flex flex-col lg:flex-row items-center gap-10'>
      {/* Text Section */}
      <section className='flex-1 text-center lg:text-left'>
        <h2 className='text-4xl font-bold text-gray-900 mb-4'>Who Are We?</h2>
        <p className='text-lg text-gray-700 leading-relaxed'>
          Afri Fashion Hub is embarking on a transformative journey to elevate African fashion
          and promote its rich cultural heritage on a global scale. To achieve this vision, we are
          developing a state-of-the-art website and mobile application that will serve as the central
          platform for our initiatives. These digital platforms will be the cornerstone of our efforts
          to empower African designers, enhance customer experiences, streamline logistics, and
          foster global connectivity within the fashion industry.
        </p>
      </section>

      {/* Image Section */}
      <section className='flex-1 flex justify-center gap-4'>
        <img src={assets.waw_female} className='w-1/2 max-w-[300px] rounded-lg shadow-lg' alt='Female fashion' />
        <img src={assets.waw_male} className='w-1/2 max-w-[300px] rounded-lg shadow-lg' alt='Male fashion' />
      </section>
    </section>
  );
};

export default WhoAreWe;