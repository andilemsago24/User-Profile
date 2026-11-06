
import { useState } from "react";
import "./App.css";

function App() {
  // Store user information
  const [name, setName] = useState("Andile");
  const [role, setRole] = useState("Front-End Developer");
  const [about, setAbout] = useState(
    "I am a passionate developer who enjoys building responsive websites and learning new technologies."
  );
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);

  // Control the edit form
  const [isEditing, setIsEditing] = useState(false);

  function handleSave() {
    setIsEditing(false);
  }

  return (
    <div className="dashboard">
      <header className="header">
        <h2>My Dashboard</h2>
        <span>My Profile</span>
      </header>

      <main className="profile-container">
        <section className="profile-card">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-picture"
          />

          <h1>{name}</h1>
          <p className="role">{role}</p>

          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Close Editor" : "Edit Profile"}
          </button>
        </section>

        <section className="details-card">
          <h2>About Me</h2>
          <p>{about}</p>

          <h2>My Skills</h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </div>

          {isEditing && (
            <div className="edit-form">
              <h2>Edit Profile</h2>

              <label>Full Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Job Role</label>
              <input
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />

              <label>About Me</label>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />

              <label>Skills (separate with commas)</label>
              <input
                value={skills.join(", ")}
                onChange={(e) =>
                  setSkills(e.target.value.split(",").map(s => s.trim()).filter(Boolean))
                }
              />

              <button onClick={handleSave}>Save Changes</button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
