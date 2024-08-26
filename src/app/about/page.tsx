// src/app/about/page.tsx
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Hero from '../components/heros/hero';
import Contact from '../components/contact/page';

export default function AboutPage() {
  return (
    <div>    
    <div className='poppins'>
    <Hero />
    <div className=''>
   {/*  <Contact/> */}
    </div>
    </div>
    </div>
  );
}
