'use client';
// components/Chatbot.js
import { useState, useEffect, useRef } from 'react';
import './Chatbot.css'; // Assuming you have Chatbot.css for styles

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      // Add an introductory message when the chat is first opened
      setChatHistory([
        { role: 'bot', content: "Hello! You can ask about Johannes's coding projects, programming skills, education and working experience in English." },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMessage = { role: 'user', content: message };
    setChatHistory([...chatHistory, userMessage]);
    setMessage('');

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    const botMessage = { role: 'bot', content: data.response };
    setChatHistory((prev) => [...prev, botMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Chat' : 'Chat With AI Assistant'}
      </button>
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">SmartChatter</div>
          <div className="chatbot-messages">
            {chatHistory.map((msg, idx) => (
              <p key={idx} className={`chatbot-message ${msg.role}`}>
                <span>{msg.content}</span>
              </p>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress} // Trigger send on Enter key
            placeholder="Type a message..."
            className="chatbot-input"
          />
          <button onClick={sendMessage} className="chatbot-send">Send</button>
        </div>
      )}
    </div>
  );
}
