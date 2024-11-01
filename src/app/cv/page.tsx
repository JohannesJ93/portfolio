// src/app/about/page.tsx
import * as React from 'react';
import CV from './cev';
import Chatbot from '../components/chatbot/Chatbot';


export default function Cv() {
  return (
    <div>      
      <CV />
      <Chatbot/> 
    </div>
  );
}
