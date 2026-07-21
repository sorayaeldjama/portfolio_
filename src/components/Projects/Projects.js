import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récentes <strong className="purple">réalisations </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Stratégie de Tests & Automatisation E2E"
              description="Documentation complète des plans de tests et scénarios de validation. Application des bonnes pratiques ISTQB pour garantir la qualité logicielle : rédaction de cahiers de recette, gestion du cycle de vie des anomalies et automatisation des parcours critiques de bout en bout avec Playwright sur la plateforme SauceDemo."
              ghLink="https://github.com/sorayaeldjama/saucedemo-strategy-and-automation" 
              demoLink="/plan-de-test.md" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;