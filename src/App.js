import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin } from "lucide-react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      {/* 🌙 Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-6 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Hi, I'm Sneha 👩‍💻</h1>
          <p className="text-xl">Computer Science Graduate | Exploring Data, SQL & Systems</p>
          <a 
            href="/resume.pdf" 
            download 
            className="mt-4 inline-block px-4 py-2 bg-black text-white rounded"
          >
            Download Resume
          </a>
        </section>

        {/* About Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p>
            I'm a Computer Science graduate, passionate about building practical systems using SQL, DBMS, and cloud technologies. Always learning, always building.
          </p>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded">
              <h3 className="text-xl font-bold">NPDS Threat Detection</h3>
              <p>ML-based user behavior system to detect SOC anomalies.</p>
              <a href="#">View on GitHub</a>
            </div>
            <div className="border p-4 rounded">
              <h3 className="text-xl font-bold">Facial Music Recommender</h3>
              <p>Recommends songs based on facial emotion via OpenCV.</p>
              <a href="#">View on GitHub</a>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Blog</h2>
          <div className="space-y-4">
            <div className="border p-4 rounded">
              <h3 className="text-xl font-bold">WHAT IS DBMS</h3>
              <p>
                Explained the core concept of Database Management Systems — what it is, how it works, and why it's essential.
                Covered CRUD operations, data integrity, crash recovery, and the importance of SQL as a query language.
              </p>
              <a 
                href="https://techschema.blogspot.com/2025/06/what-is-dbms.html"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 underline"
              >
                Read more →
              </a>
            </div>

            <div className="border p-4 rounded">
              <h3 className="text-xl font-bold">My Learning Journey</h3>
              <p>
                Reflecting on my recent learning progress — from SQL to systems, and how I built projects.
                Documented my experience with VPNs, MySQL Workbench, database restore/backup, stored procedures, and differences between DB engines.
              </p>
              <a 
                href="https://techschema.blogspot.com/2025/06/my-learning-journey_3.html"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 underline"
              >
                Read more →
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-3 gap-1">
            <li>SQL, MySQL, PostgreSQL</li>
            <li>Python, Java, C++</li>
            <li>DBMS, OS, Git, Firebase</li>
            <li>Azure, Bash, Linux</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="flex space-x-4">
            <a href="mailto:snehareddy2430@gmail.com"><Mail /></a>
            <a href="https://github.com/sneha5500"><Github /></a>
            <a href="https://linkedin.com/in/snehagurram"><Linkedin /></a>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
