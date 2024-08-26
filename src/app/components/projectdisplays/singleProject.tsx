
'use client'
import { useState } from 'react'

const product = {
  name: 'Code generator for multiple programming languages',
  description:
    'Generating code is essential because it significantly boosts productivity, allowing developers to automate repetitive tasks and focus on more complex aspects of a project. It ensures consistency across the codebase, reducing the likelihood of errors and making the code easier to maintain. By standardizing code structures and patterns, it also facilitates collaboration among team members. Additionally, code generation adapts quickly to changes, allowing for rapid updates across the entire project, saving time and effort. Overall, it streamlines development, improves code quality, and accelerates the delivery of reliable software.',
  imageSrc: '/assets/generateit.png',
}

export default function SingleProject() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="">
      <div className=" bg-transparent lg:grid lg:grid-cols-7 lg:grid-rows-1 ">
        
        <div className="tää2 lg:col-span-4 lg:row-end-1">

          <div
            className=" aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? (
              <div className="flex items-center justify-center w-full h-full bg-black ">
                <h2 className="projectsh4 text-8xl font-bold text-white ">Top Secret</h2>
              </div>
            ) : (
              <img src={product.imageSrc} className="h-full w-full object-cover  blur" />
            )}
          </div>

        </div>

        {/* Product details */}
        <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
          <div className="flex flex-col-reverse">
            <div className="mt-4">
              <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl text-center">
                {product.name}
              </h2>
            </div>
          </div>

          <p className="mt-6 ml-6 text-black text-left">  
          Generating code is essential because it significantly boosts productivity,
           allowing developers to automate repetitive tasks and focus on more complex aspects of a project. <br/><br/>
            It ensures consistency across the codebase, reducing the likelihood of errors and making the code easier to maintain.
             By standardizing code structures and patterns, it also facilitates collaboration among team members. <br/><br/>
              Additionally, code generation adapts quickly to changes, allowing for rapid updates across the entire project,
               saving time and effort. Overall, it streamlines development, improves code quality, and accelerates the delivery of 
               reliable software.',

          </p>
        </div>

      </div>
    </div>
  )
}
