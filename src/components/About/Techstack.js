import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiGit,
  DiDocker
} from "react-icons/di";
import {
  SiAngular,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiSelenium,
  SiPlaywright,
  SiPostman,
  SiJira
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Automatisation & Tests */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPlaywright />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* Développement Back-End & Front-End */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>

      {/* Bases de données (SQL) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

      {/* Outils, CI/CD & Gestion de projet */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
    </Row>
  );
}

export default Techstack;