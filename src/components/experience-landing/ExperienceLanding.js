import React from 'react';
import './ExperienceLanding.css';
import { motion } from 'framer-motion';
import content from '../../lib/content';

const tagColor = {
  'FULL-TIME': {
    text: '#fff',
    bg: '#EB2026',
  },
  FREELANCING: {
    text: '#fff',
    bg: '#219393',
  },
  INTERNSHIP: {
    text: '#000',
    bg: '#FCCC01',
  },
};

function ExperienceLanding() {
  return (
    <div className="experience-landing">
      <div className="experience-welcome">
        <h1>My Experience</h1>
      </div>
      <div className="experience-container">
        <div className="experience-grid">
          {content.experiences.map((experience, index) => {
            return (
              <motion.div whileHover={{ scale: 1.02 }} key={index}>
                <div
                  className="experience"
                  onClick={() => window.open(`${experience.link}`, '_blank')}
                >
                  <div
                    className="company-logo"
                    style={{ backgroundImage: `url(${experience.image})` }}
                  ></div>
                  <div className="company-name">
                    <h1>{experience.name}</h1>
                    <div
                      className="exp-type"
                      style={{
                        backgroundColor: tagColor[experience.tag.toUpperCase()].bg,
                        color: tagColor[experience.tag.toUpperCase()].text,
                      }}
                    >
                      {experience.tag.toUpperCase()}
                    </div>
                  </div>

                  <p
                    style={{
                      fontWeight: '700',
                      color: 'var(--primary)',
                      marginBottom: '5px',
                    }}
                  >
                    {experience.role}
                  </p>
                  <p style={{ color: 'var(--span)' }}>( {experience.span} )</p>
                  <div className="experience-content">
                    <ul>
                      <li>{experience.description.first}</li>
                      <li>{experience.description.second}</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExperienceLanding;
