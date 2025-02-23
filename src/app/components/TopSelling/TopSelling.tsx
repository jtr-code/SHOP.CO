import Image from 'next/image';
import React from 'react';

const TopSelling = () => {
  const data = [
    {
      title: 'Men’s Casual Shirt',
      rating: 4.6,
      price: 35,
      actualPrice: 50,
      image:
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Men’s Slim Fit Chinos',
      rating: 4.5,
      price: 40,
      actualPrice: 55,
      image:
        'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Women’s High-Waist Jeans',
      rating: 4.7,
      price: 50,
      actualPrice: 65,
      image:
        'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Kids’ Printed T-Shirt',
      rating: 4.3,
      price: 15,
      actualPrice: 25,
      image:
        'https://images.unsplash.com/photo-1620799139652-715e4d5b232d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];
  return (
    <div className='mx-4'>
      <h1 className='text-center text-head-large font-bold font-open-sans'>Top Selling</h1>
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

export default TopSelling;
