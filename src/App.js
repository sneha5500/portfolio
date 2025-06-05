import { Mail, Github, Linkedin } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hi, I'm Sneha 👋</h1>
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
          <a href="mailto:youremail@example.com"><Mail /></a>
          <a href="https://github.com/yourusername"><Github /></a>
          <a href="https://linkedin.com/in/yourusername"><Linkedin /></a>
        </div>
      </section>
    </div>
  );
}

export default App;

