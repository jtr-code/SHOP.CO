import React from 'react';
import Image from 'next/image';

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
    <div className='mx-4'>
      <h1 className='text-center text-head-large font-bold font-open-sans'>New Arrival</h1>
      <div className='flex overflow-x-scroll'>
        {data.map(({ title, rating, price, actualPrice, image }, index) => (
          <div key={index} className='card bg-base-100 min-w-80 border border-slate-500 m-4'>
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
      <div className='flex justify-center my-8'>
        <button className='btn btn-outline'>View all</button>
      </div>
    </div>
  );
};

export default NewArrival;
