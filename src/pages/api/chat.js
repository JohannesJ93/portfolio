// pages/api/chat.js
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// Function to dynamically extract relevant data based on keywords in the user query
function extractRelevantData(jsonData, query) {
  query = query.toLowerCase();

  // Expanded keyword lists
  const projectKeywords = [
    "project", "projects", "portfolio", "thesis", "acorn", "warehouse", "management", "system",
    "market", "reservation", "service", "ely-center", "angular", "next.js", "node.js", "frontend",
    "backend", "application", "app", "task", "school", "group", "website", "web development",
    "snappcode", "code", "generation", "innovation", "developer"
  ];

  const experienceKeywords = [
    "experience", "job", "work", "employment", "career", "background", "history", "meiko",
    "lemonsoft", "metsys", "aksulit", "ely", "eberhard", "linköping", "kalmarsund", "burri",
    "tietoakseli", "liikepalvelut", "fullstack", "software", "warehouse", "worker", "floorball",
    "player", "painter", "trainee", "internship", "position", "role", "company", "industry",
    "professional", "experience", "developer", "snappcode"
  ];

  const skillsKeywords = [
    "skills", "abilities", "competencies", "frameworks", "coding", "coding languages", "languages",
    "technology", "technologies", "tools", "knowledge", "expertise", "python", "javascript", "typescript",
    "sql", "mysql", "node.js", "react", "laravel", "angular", "next.js", "php", "html", "css", "backend",
    "frontend", "ui", "data automation", "excel", "accounting", "financial", "statements", "office",
    "network", "nfc", "automation", "data", "handling", "development", "stack", "database", "innovation"
  ];

  const contactKeywords = [
    "contact", "phone", "email", "address", "location", "birthdate", "age", "info", "information", "about",
    "johannes", "tell", "where"
  ];

  const educationKeywords = [
    "education", "study", "school", "university", "degree", "business", "training", "management",
    "qualification", "vocational", "studies", "learning", "bachelor", "applied sciences", "about",
    "johannes", "tell", "where"
  ];

  // Collect relevant data from all matching sections
  const relevantData = {};

  if (projectKeywords.some(keyword => query.includes(keyword))) {
    relevantData.projects = jsonData.profile.projects;
  }

  if (experienceKeywords.some(keyword => query.includes(keyword))) {
    relevantData.experience = jsonData.profile.experience;
  }

  if (skillsKeywords.some(keyword => query.includes(keyword))) {
    // Collect unique skills across projects, experience, and education
    const skills = new Set();
    jsonData.profile.projects.forEach(project => project.skills && project.skills.forEach(skill => skills.add(skill)));
    jsonData.profile.experience.forEach(exp => exp.skills && exp.skills.forEach(skill => skills.add(skill)));
    jsonData.profile.education.forEach(edu => edu.skills && edu.skills.forEach(skill => skills.add(skill)));
    relevantData.skills = Array.from(skills);
  }

  if (contactKeywords.some(keyword => query.includes(keyword))) {
    relevantData.contact = jsonData.profile.contact;
  }

  if (educationKeywords.some(keyword => query.includes(keyword))) {
    relevantData.education = jsonData.profile.education;
  }

  // If no specific topic is found, provide a general summary
  if (Object.keys(relevantData).length === 0) {
    relevantData.summary = jsonData.profile.summary;
  }

  return relevantData;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userMessage = req.body.message;
    console.log("User message received:", userMessage);

    // Load the JSON data
    const filePath = path.join(process.cwd(), 'public', 'data', 'profile.json');
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Extract only relevant data based on the user query
    const relevantData = extractRelevantData(jsonData, userMessage);
    console.log("Relevant data extracted:", relevantData);

    try {
      // Send user message and relevant JSON data to GPT-3.5 for response
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are an assistant with access to Johannes's professional data. Answer questions accurately based on the provided data, keeping responses concise and within 35 words. If you can't find an answer in the data, respond with "I'm sorry, I don't have that information."`,
            },
            {
              role: "system",
              content: `Data: ${JSON.stringify(relevantData)}`,
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          max_tokens: 75,  // Adjust as needed for response length
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const botMessage = data.choices[0]?.message?.content.trim() || "I'm sorry, I don't have that information.";
      console.log("Generated bot message:", botMessage);

      res.status(200).json({ response: botMessage });
    } catch (error) {
      console.error("Error in /api/chat:", error);
      res.status(500).json({ error: "Error generating response" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
