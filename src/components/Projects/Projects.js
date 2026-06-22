import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Brain Tumor Detection"
              description="Deep learning based brain tumor detection using CNN and MRI images. Built with Python and TensorFlow, applying transfer learning to classify tumor types from medical scans."
              ghLink="https://github.com/shreyhi/Brain_tumor_detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Agentinsure"
              description="AI-powered insurance platform built with React and Node.js. Helps users explore and compare insurance options through an intelligent agent-driven experience."
              ghLink="https://github.com/shreyhi/Agentinsure"
              demoLink="https://gigshield-ai-seven.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Flow Finance"
              description="A full-stack finance management application built with the MERN stack. Tracks income, expenses, and cash flow with an interactive dashboard and data visualizations."
              ghLink="https://github.com/shreyhi/FLOW-FINANCE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Financial Risk Analysis"
              description="Web application for analyzing financial risk using data-driven models. Built with JavaScript to process market data and visualize risk metrics for informed decision-making."
              ghLink="https://github.com/shreyhi/Financial-Risk-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="DevOps Data Quality"
              description="Python-based data quality pipeline for DevOps workflows. Validates, cleans, and monitors datasets to ensure reliable data across automated CI/CD pipelines."
              ghLink="https://github.com/shreyhi/devops-data-quality"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Invitation Card"
              description="Responsive digital invitation card built with HTML and CSS. Features modern design, smooth animations, and is deployed via GitHub Pages for easy sharing."
              ghLink="https://github.com/shreyhi/INVITATION-CARD"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
