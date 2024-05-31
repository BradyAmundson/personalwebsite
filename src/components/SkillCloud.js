import React from "react";
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

const generateRandomSkills = () => {
  return skillsList.map((skill) => {
    const startScroll = getRandomInt(1900, 2500);
    const endScroll = getRandomInt(startScroll + 200, 2700);

    return (
      <Parallax
        key={skill}
        className="word-cloud-item"
        opacity={[-5, 1]}
        startScroll={startScroll}
        endScroll={endScroll}
      >
        <h1>{skill}</h1>
      </Parallax>
    );
  });
};

const SkillCloud = () => {
  return <div className="word-cloud">{generateRandomSkills()}</div>;
};

export default SkillCloud;
