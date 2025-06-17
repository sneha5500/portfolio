import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const ClassicLayout = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hi, I'm Sneha 👩‍💻</h1>
        <p className="text-xl">Computer Science Student | SQL & Systems Enthusiast</p>
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
          I'm a Master's student in Computer Science, passionate about building
          practical systems using SQL, DBMS, and cloud tech. Always learning,
          always shipping.
        </p>
      </section>

     {/* Projects Section */}
<section className="space-y-4">
  <h2 className="text-2xl font-semibold">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    {/* ETL Construction Project */}
    <div className="border p-4 rounded">
      <h3 className="text-xl font-bold">🏗️ Construction Project Dashboard</h3>
      <p>
        Built a full ETL-based construction dashboard to manage 3000+ sites,
        workers, materials, ownership transfers, and project progress.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>🔐 Login + Logout with session state</li>
        <li>📦 Material usage and leftover tracking</li>
        <li>💸 Salary reports based on work logs</li>
        <li>📊 Live dashboard using Streamlit + SQLite</li>
        <li>📍 Top Project Area Insights with CSV → DB ETL</li>
      </ul>
      <div className="mt-3 space-x-4">
        <a
          className="text-blue-300 underline"
          href="https://constructionprojectetl-dvui9a28qrt4efeuntf8app.streamlit.app"
          target="_blank"
          rel="noreferrer"
        >
          🚀 Live App
        </a>
        <a
          className="text-blue-300 underline"
          href="https://github.com/sneha5500/construction_project_etl"
          target="_blank"
          rel="noreferrer"
        >
          📁 GitHub Repo
        </a>
      </div>
    </div>

    {/* UserWebApp Project */}
    <div className="border p-4 rounded">
      <h3 className="text-xl font-bold">🧑‍💻 User Profile Management System</h3>
      <p>
        A full-stack ASP.NET Core MVC app to manage user profiles with image uploads and interactive map-based location selection.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Create, edit, and delete user profiles</li>
        <li>Upload profile pictures (stored in wwwroot/uploads)</li>
        <li>Location tracking using Leaflet maps (lat/lon)</li>
        <li>Built with EF Core + SQL Server (via Docker)</li>
      </ul>
      <div className="mt-3 space-x-4">
        <a
          className="text-blue-300 underline"
          href="https://github.com/sneha5500/UserWebApp"
          target="_blank"
          rel="noreferrer"
        >
          📁 GitHub Repo
        </a>
      </div>
    </div>

  </div> {/* <-- This was missing */}
</section>


      {/* Blog Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Blog</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded">
            <h3 className="text-xl font-bold">📚 WHAT IS DBMS</h3>
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
            <h3 className="text-xl font-bold">✍️ My Learning Journey</h3>
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
          <a href="https://github.com/sneha5500" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://linkedin.com/in/snehagurram" target="_blank" rel="noreferrer"><Linkedin /></a>
        </div>
      </section>
    </div>
  );
};

export default ClassicLayout;

