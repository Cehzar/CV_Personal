import React from 'react';
import '../components/SkillsSection.css'; // Importa los estilos CSS

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="skills-header">
        <h2>Skills</h2>
      </div>
      <div className="skills-list">
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>SQL</li>
          {/* Agrega más habilidades según sea necesario */}
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
