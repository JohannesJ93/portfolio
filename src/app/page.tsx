// src/app/page.tsx
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ProjectsDisplay from './components/projectdisplays/projectsdisplay'
import CurrentProjectsDisplay from './components/projectdisplays/currentProjectDisplay';
import Chatbot from './components/chatbot/Chatbot';

export default function HomePage() {
  return (
    <div className='tausta'>
     {/*  <Typography variant="h1" gutterBottom>
        Johannes Jokinen
      </Typography>
      <Typography variant="h1" gutterBottom>
       Full Stack Developer
      </Typography> */}
      <Chatbot/> 
      <ProjectsDisplay/>
      <div className='tää3'>
      <CurrentProjectsDisplay/></div>
    </div>
  );
}
