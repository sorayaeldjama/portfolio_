import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            BONJOUR À TOUS, je suis <span className="purple">El Djama Soraya</span>.
            <br />
            J'ai un **Master 2 en conduite de projet informatique** et j'ai enseigné
            pendant 2 ans les langages de programmation au lycée.
            <br />
            J'ai également un **bachelor en conception et développement web et mobile**,
            réalisé en alternance dans une entreprise en tant que développeuse front-end.
            <br />
            <br />
            En dehors de la programmation, voici quelques activités que j'apprécie :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux
            </li>
            <li className="about-activity">
              <ImPointRight /> Écrire des blogs techniques
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aspirez à créer des choses qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">El Djama Soraya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
