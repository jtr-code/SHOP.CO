import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='sm:mx-6 min-h-[500px] p-4 bg-[#F2F0F1] md:flex  gap-4 items-center justify-center'>
      <article className='space-y-4'>
        <h1 className='text-head-large font-extrabold leading-none text-black'>
          FIND CLOTHES <br /> THAT MATCHES <br />
          YOUR STYLE
        </h1>
        <p>
          Browse through our diverse range of meticulously crafted garments, designed <br /> to
          bring out your individuality and cater to your sense of style.
        </p>
        <div className='flex flex-col gap-2'>
          <button className='btn btn-neutral bg-black btn-md rounded-full max-w-48'>
            Shop Now
          </button>
          <Statistics />
        </div>
      </article>
      <section className='relative'>
        <Image
          src={'/banner_lg.jpg'}
          width={540}
          height={463}
          alt='hero-image'
          objectFit='cover'
          className=''
        />
      </section>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className='stats stats-vertical lg:stats-horizontal bg-light-gray'>
      <div className='stat'>
        <div className='stat-value'>200 +</div>
        <div className='stat-desc'>International Brands</div>
      </div>

      <div className='stat'>
        <div className='stat-value'>2,000+</div>
        <div className='stat-desc'>High-Quality Products</div>
      </div>

      <div className='stat'>
        <div className='stat-value'>30,000+</div>
        <div className='stat-desc'>Happy Customers</div>
      </div>
    </div>
  );
};

export default Banner;
