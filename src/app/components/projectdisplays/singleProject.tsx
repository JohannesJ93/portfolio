'use client'
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const product = {
  name: 'App for making shopping more easy: Kauppis App',
  imageSrc: '/assets/kauppiskuva.png',
  altSrc: 'secret',
}

export default function SingleProject() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="">
      <div className="bg-transparent lg:grid lg:grid-cols-7 lg:grid-rows-1">

        <div className="tää2 lg:col-span-4 lg:row-end-1">
          <div
            className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a href="https://kauppis.com" target="_blank" rel="noopener noreferrer">
              <Image
                src={product.imageSrc}
                alt={product.altSrc}
                layout="fill"           // Keeps image full height and width
                objectFit="cover"       // Ensures image covers the container fully
                objectPosition="-25px top" // Positions the image from the top-left corner
                className="h-full w-full"
              /></a>
          </div>
        </div>

        {/* Product details */}
        <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
          <div className="flex flex-col-reverse">
            <div className="mt-4">
              <h2 className="text-2xl font-bold tracking-tight text-green-500 glow-blue sm:text-3xl text-center">
                <a
                  href="https://www.kauppis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.name}
                </a>
              </h2>
            </div>
          </div>

          <p className="mt-6 ml-6 text-green-500 text-left">
            I basically started developing the app since I used to always forget to buy something from the store.
            Also I noticed that there were not so much great options to manage data from recipes to shopping 
            lists, so the app also works for that.
            <br /><br />
            The app has couple of AI features that make life more simple, for example there is optimized shopping 
            routes, that lets me put the list items in the order I usually walk trough the store.
            <br /><br />
            Additionally, the app adapts quickly to real-world needs with its PWA capabilities,
             role-based access, and dynamic image handling,
            saving users time and frustration. 
              <br /><br />
              At the moment it is at testing phase at kauppis.com.
          </p>
        </div>
      </div>
    </div>
  )
}
