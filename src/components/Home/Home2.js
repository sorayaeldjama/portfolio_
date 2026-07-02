import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function AboutMe() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
Un bug en production ne coûte pas seulement de l'argent : il entame la confiance des utilisateurs et l'image 
de marque de l'entreprise. L'Assurance Qualité n'est plus une simple étape de validation, c'est un pilier 
stratégique indispensable.
<br />
<br />

C’est sur le terrain, au fil de mes expériences de développeuse Full Stack (Java/Angular), que j'ai forgé cette 
conviction. Au-delà de la conception d'architectures robustes, j'ai toujours eu à cœur de sécuriser chaque 
livraison : mise en place de tests unitaires, diagnostic approfondi d'anomalies (support N2/N3) et anticipation 
des régressions. Cette exigence de fiabilité s'est naturellement transformée en une véritable passion pour la
 Qualité Logicielle.
 <br />
<br />
Aujourd’hui certifiée ISTQB, j'évolue pleinement en tant qu'Analyste Test / Testeuse QA. Mon atout majeur ? 
Je parle le langage des développeurs. Je mets ma double casquette — l'esprit critique de la QA allié à la 
compréhension profonde du code et de l'automatisation (notamment avec des outils modernes comme Playwright)   
          <i> <b className="purple"> Playright</b></i> <i> — au 
service des équipes produit pour garantir des applications performantes, maintenables et irréprochables.
               
              </i>
              <br />
          
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI</h1>
            <p>
              N'hésitez pas à <span className="purple">me contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sorayaeldjama"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/ton-twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soraya-el-djama/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/ton-instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutMe;
