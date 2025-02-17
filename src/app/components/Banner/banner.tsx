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
          <NewArrival />
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

const NewArrival = () => {
  const data = [
    {
      title: 'Skinny fit jeans',
      rating: 4.5,
      price: 240,
      actualPrice: 260,
      image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg'
    },
    {
      title: 'Slim fit jeans',
      rating: 4.7,
      price: 220,
      actualPrice: 250,
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg'
    },
    {
      title: 'Regular fit jeans',
      rating: 4.3,
      price: 200,
      actualPrice: 230,
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg'
    },
    {
      title: 'Loose fit jeans',
      rating: 4.0,
      price: 210,
      actualPrice: 240,
      image: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg'
    }
  ];

  return (
    <div>
      {data.map(({ title, rating, price, actualPrice, image }, index) => (
        <div key={index} className='card bg-base-100 w-96 shadow-xl m-4'>
          <figure className='w-full h-48 relative overflow-hidden'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{title}</h2>
            <p>Rating: {rating}</p>
            <p>
              Price: ${price} <span className='line-through text-gray-500'>${actualPrice}</span>
            </p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
