import React, { useState, useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import "./styles/SkillCloud.css";

const skillsList = [
  "Python",
  "JavaScript",
  "Ruby",
  "TypeScript",
  "Java",
  "SQL",
  "C",
  "C++",
  "Rust",
  "Go",
  "Swift",
  "React",
  "Flask",
  "NodeJS",
  "Express.js",
  "TensorFlow",
  "PyTorch",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "MySQL",
  "Git",
  "Perforce",
  "JUnit",
  "RESTful API",
  "Linux",
  "Firebase",
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const SkillCloud = () => {
  const [scrollPositions, setScrollPositions] = useState([]);
  const cloudRef = useRef(null);

  const generateRandomSkills = () => {
    if (cloudRef.current) {
      const cloudTop =
        cloudRef.current.getBoundingClientRect().top + window.scrollY;
      const viewportHeight = window.innerHeight;

      const positions = skillsList.map(() => {
        const startScroll =
          cloudTop - viewportHeight + getRandomInt(0, viewportHeight / 2);
        const endScroll =
          cloudTop -
          viewportHeight +
          getRandomInt(viewportHeight / 2, viewportHeight);
        return { startScroll, endScroll };
      });

      setScrollPositions(positions);
    }
  };

  useEffect(() => {
    generateRandomSkills();
    window.addEventListener("resize", generateRandomSkills);
    return () => window.removeEventListener("resize", generateRandomSkills);
  }, []);

  return (
    <div ref={cloudRef} className="word-cloud">
      {skillsList.map((skill, index) => (
        <Parallax
          key={skill}
          className="word-cloud-item"
          opacity={[-5, 1]}
          startScroll={scrollPositions[index]?.startScroll}
          endScroll={scrollPositions[index]?.endScroll}
        >
          <h1>{skill}</h1>
        </Parallax>
      ))}
    </div>
  );
};

export default SkillCloud;
