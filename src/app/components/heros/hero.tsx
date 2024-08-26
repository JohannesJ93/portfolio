'use client'
import React from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Hero() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="Aboutti">
        <main>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            >
              <div />
            </div>
            <div className="overflow-hidden">
              <div className=" mx-auto max-w-7xl px-6 pb-32  lg:px-8 ">
                <div className="tää mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <Paper
                    elevation={12}
                    sx={{
                      p: 4,
                      mb: 0,
                      borderRadius: 8,
                      backgroundColor: 'transparent', // No background color
                      /*  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Customize shadow
                       border: '1px solid rgba(0, 0, 0, 0.12)', // Optional: Light border for better visibility */
                    }}
                  >
                    <div className=" relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Crafting Digital Solutions with Passion and Precision
                      </h1>
                      <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                      <p>I&apos;m a dedicated software developer, proudly holding a Bachelor&apos;s degree from JAMK, where I graduated while also working at the</p>
                      same time in July 2023.
                        Prior to diving into the world of technology, I competed at the national level in floorball. Today, I channel that same
                        competitive spirit and commitment to excellence into my work as a Software Developer at Meiko, while also still playing
                        some floorball.
                      </p>
                      <div className="mt-10 flex items-center gap-x-6">
                        <a
                          href="/cv"
                          className="rounded-md bg-yellow-200 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Contact Me
                        </a>
                      </div>
                    </div></Paper>
                  <div className=" mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">

                    <div className="kuvat ml-auto w-44 flex-none space-y-8 pt-10 sm:ml-0 lg:order-last xl:order-none">
                      <div className="relative overflow-hidden">
                        <img
                          alt=""
                          src="/assets/70.jpg"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg object-[70%]"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    

                      <div className="kuvat relative overflow-hidden">
                        <img
                          alt=""
                          src="/assets/22.png"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg object-[50%]"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>

                    <div className="kuvat2 mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative overflow-hidden">
                        <img
                          alt=""
                          src="/assets/122.jpg"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg object-[35%]"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="kuvat2 relative overflow-hidden">
                        <img
                          alt=""
                          src="/assets/93B.jpg"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg object-[40%]"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="kuvat2 w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative overflow-hidden">
                        <img
                          alt=""
                          src="/assets/10.jpg"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg object-[1%]"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="kuvat2 relative overflow-hidden">
                        <img
                          alt=""
                          src="/assets/136.jpg"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div></ThemeProvider>
  );
}
