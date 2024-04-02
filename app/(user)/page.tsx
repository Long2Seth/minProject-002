'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProductCardComponent from '@/component/ProductCardComponent';

const ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [getData, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${ENDPOINT}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center mx-10'>
      {getData.map((product : any , index) => (
        <ProductCardComponent
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
          onClick={() => router.push(`/${product.id}`)}
        />
      ))}
    </main>
  );
}
