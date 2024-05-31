import React from "react";
import WelcomeBanner from "../components/welcomeBanner";
import Spin from "../components/Spin";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./styles/Home.css";
import { useState, useEffect } from "react";
import SkillCloud from "../components/SkillCloud";
import JobExperience from "../components/JobExperience";
import Project from "../components/Project";
import CustomFooter from "../components/CustomFooter";

const Home = () => {
  return (
    <div className="section-container">
      <div classname="section-item">
        <ParallaxProvider>
          <WelcomeBanner />
          <div className="center full">
            <h1 className="headline gray">I'm Brady Amundson</h1>
          </div>
        </ParallaxProvider>
      </div>
      <div classname="section-item">
        <div className="row">
          <ParallaxProvider>
            {/* <Parallax
            translateX={["-800px", "0px"]}
            scale={[0.75, 1]}
            rotate={[-720, 0]}
            easing="easeInQuad"
            y={[-20, 20]}
          >
            <h1>Heyo</h1>
          </Parallax> */}
            <div className="column">
              <Parallax speed={-20}>
                <header className="sectionheader">Work Experience</header>
              </Parallax>
            </div>
            <div className="column">
              <Parallax
                speed={10}
                easing={"easeInOutQuad"}
                scale={[1, 1.5, "easeInOutQuad"]}
              >
                <JobExperience
                  jobTitle="Software Engineer Internship"
                  company="Keysight Technologies"
                  location="Calabasas, CA"
                  startDate="May 2023"
                  endDate="August 2023"
                  description="Architected and developed a full-stack web app leveraging React.js, Material UI, Node.js, Express, and MySQL
                Streamlined lab management, notably implementing features allowing personnel to claim and reserve lab resources, while also engineering a Python Flask server to integrate with in-house API for remote regression execution, leading to smoother operations and information accessibility
                Authored Python scripts automating web app deployment on Ubuntu servers and facilitating real-time database updates by extracting data from lab resources through SSH connections
                Streamlined integration with company systems and Agile workflow, conducting comprehensive testing of company "
                />
              </Parallax>
              <Parallax
                speed={10}
                easing={"easeInOutQuad"}
                scale={[1, 1.5, "easeInOutQuad"]}
              >
                <JobExperience
                  jobTitle="Software and Automation Intern"
                  company="SAP"
                  location="Remote"
                  startDate="May 2022"
                  endDate="May 2023"
                  description="Collaborated with DevOps, Quality Assurance Teams, and CI/CD pipelines to enhance automation efficiency across SAP's product range, integrating Perforce, Git, and Jenkins
                Composed Ruby scripts to automate deployment of Windows test servers and test conversions
                Demonstrated  teamwork, flexibility, agility, great communication skills and ability to deal with diverse personality and work styles, to deliver enterprise-ready software
                "
                />
              </Parallax>
              <Parallax
                speed={10}
                easing={"easeInOutQuad"}
                scale={[1, 1.5, "easeInOutQuad"]}
              >
                <JobExperience
                  jobTitle="Computer Science Teachers Assistant"
                  company="Loyola Marymount University"
                  location="Los Angeles, CA"
                  startDate="September 2021"
                  endDate="May 2024"
                  description="Mentored students with homework and test prep leading to a better understanding of computer science concepts
                Taught basic concepts such as iteration, recursion, inheritance, basic data structures, and other introductory computer science ideas at LMU’s computer lab three times a week
                Applied expertise in web development to create and manage interactive learning platforms, employing React.js and Firebase. Demonstrated proficiency in translating complex technical concepts into accessible and digestible information, showcasing effective communication and problem-solving skills"
                />
              </Parallax>
              <Parallax
                speed={10}
                easing={"easeInOutQuad"}
                scale={[1, 1.5, "easeInOutQuad"]}
              >
                <JobExperience
                  jobTitle="Coastal Research Institute Intern"
                  company="Coastal Research Institute"
                  location="Santa Monica, CA"
                  startDate="May 2021"
                  endDate="July 2021"
                  description="Coded a program to convert raw satellite data to land surface temperature maps in order to calibrate satellites with on-site data
                Collaborated with scientists at Pepperdine, NASA JPL and The Bay Foundation to hypothesize and problem-solve beach temperature trends and their effects on the Grunion
                Worked independently to develop professional skills, answer research questions and produce a final research synopsis
                "
                />
              </Parallax>
              <Parallax
                speed={10}
                easing={"easeInOutQuad"}
                scale={[1, 1.5, "easeInOutQuad"]}
              >
                <JobExperience
                  jobTitle="Research Assistant"
                  company="Loyola Marymount University"
                  location="Los Angeles, CA"
                  startDate="May 2023"
                  endDate="July 2023"
                  description="Developed a metacognitive model to enhance AI interpretability: Proposed and formalized a model capable of identifying and clarifying uncertainties within base-model AI, aiming to improve AI's ability to self-assess and address gaps in understanding.

                Collaborative research and code development: Worked effectively in a virtual team to formulate research topics, find supporting literature, and develop pseudocode. Overcame challenges associated with adapting forked code from another project.

                Practical application and deep learning: Applied theoretical knowledge in AI to practical coding tasks, including Monte Carlo simulations. Gained in-depth understanding through code breakdowns and research paper analysis."
                />
              </Parallax>
            </div>
          </ParallaxProvider>
        </div>
      </div>
      <div classname="section-item projects">
        <div className="row">
          <ParallaxProvider>
            <div className="projects">
              <div className="sectionheader projectheader">
                <Parallax translateY={["-50%", "1400%"]}>
                  <header>Projects</header>
                </Parallax>
              </div>
              <div style={{ position: "absolute", right: "60vw" }}>
                <div className="column">
                  <Parallax translateY={["0%", "120%"]}>
                    <Spin>
                      <Project
                        projectName="Gruuper"
                        description="A web app to streamline class group-making process for educators leveraging React.js
                    Utilized Firebase Firestore for real-time storage and retrieval and Firebase Auth for secure user-accounts
                    Powered by a novel machine learning model that creates intelligent groups based on users personality, skills, and availability. This is then vectorized for a box transformer and sent to a KNN clustering model to group users"
                        technologies="React.js, Firebase, Vercel, Python, Flask, AWS"
                        demoLink="https://gruuper.vercel.app"
                        codeLink="https://github.com/BradyAmundson/gruuper"
                      />
                      <Project
                        projectName="LLM Detection in Written Text"
                        description="Applying a variety of ML models, predicted whether text was human or LLM written
                Implemented Random Forest, SVM, Perceptron, Naive Bayes, and custom Sequential Neural Network
                Personally led the neural network development using TensorFlow, Out of Vocabulary tokenizing, and the following layers in the RNN: Embedding, LSTM, Dense, and Dropout achieving a 98% accuracy rating
                "
                        technologies="Python"
                        codeLink="https://github.com/LMU-CMSI-Korpusik/project-d-a-b"
                      />
                      <Project
                        projectName="RL Capture the Flag"
                        description="Implemented Q-learning for the agent to learn and improve its gameplay dynamically. Adapted its behavior based on rewards obtained, optimizing performance
                Engineered features for effective game perception, including distance evaluation to food, opponents, and home base. Utilized feature weights to guide decision-making and enhance gameplay strategy.
                "
                        technologies="Python"
                      />
                      <Project
                        projectName="Distle Player"
                        description="Crafted an automated player in Java  using a custom modified entropy algorithm to solve  a “Distle” puzzle
                Achieved a 27% higher efficiency rating than class average, secured a 98% accuracy rating, and attained 1st rank in class for both efficiency and accuracy
                "
                        technologies="Java"
                      />
                    </Spin>
                  </Parallax>
                </div>
              </div>
            </div>
          </ParallaxProvider>
        </div>
      </div>
      <div classname="section-item">
        <div className="row">
          <ParallaxProvider>
            <div className="skills">
              <div>
                <header className="sectionheader">Skills</header>
              </div>
              <SkillCloud />
            </div>
          </ParallaxProvider>
        </div>
      </div>
      {/* <div className="row">
        <ParallaxProvider>
          <div className="column">
            <Parallax
              speed={10}
              easing={"easeInOutQuad"}
              scale={[1, 1.5, "easeInOutQuad"]}
            >
              <h1>Algos</h1>
            </Parallax>
            <Parallax
              speed={10}
              easing={"easeInOutQuad"}
              scale={[1, 1.5, "easeInOutQuad"]}
            >
              <h1>Algos</h1>
            </Parallax>
            <Parallax
              speed={10}
              easing={"easeInOutQuad"}
              scale={[1, 1.5, "easeInOutQuad"]}
            >
              <h1>Algos</h1>
            </Parallax>
            <Parallax
              speed={10}
              easing={"easeInOutQuad"}
              scale={[1, 1.5, "easeInOutQuad"]}
            >
              <h1>Algos</h1>
            </Parallax>
            <Parallax
              speed={10}
              easing={"easeInOutQuad"}
              scale={[1, 1.5, "easeInOutQuad"]}
            >
              <h1>Algos</h1>
            </Parallax>
          </div>
          <div className="column">
            <Parallax speed={0}>
              <header className="sectionheader">Classes</header>
            </Parallax>
          </div>
        </ParallaxProvider>
      </div> */}
      <CustomFooter />
    </div>
  );
};

export default Home;
