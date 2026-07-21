import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* Utilisation d'une div globale pour le texte justifié et de balises <p> pour espacer les idées proprement */}
          <div style={{ textAlign: "justify" }}>
            <p>
              Bonjour à tous, je suis <span className="purple">Soraya El Djama</span>.
            </p>
            
            <p>
              Titulaire d'un <strong>Master 2 en Conduite de projets informatiques</strong>, j'ai d'abord partagé ma passion en enseignant la programmation au lycée pendant deux ans.
            </p>
            
            <p>
              J’ai ensuite consolidé mes compétences techniques avec un Bachelor en Conception et Développement Web et Mobile, réalisé en alternance chez Lagertha.tech, où j’ai évolué en tant que développeuse Front-End (React).
            </p>
            
            <p>
              Actuellement, je poursuis un Master 2 (Développement, Data et IA) en alternance chez Prosol, où j’occupe le poste de développeuse Full Stack. J’y conçois et développe des applications web en utilisant des technologies modernes et robustes, telles que Spring Boot pour le back-end et Angular pour le front-end.
            </p>
            
            <p>
              En dehors du code, voici quelques activités qui m'animent au quotidien :
            </p>
          </div>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Les jeux vidéo (Call of Duty, jeux de stratégie)
            </li>
            <li className="about-activity">
              <ImPointRight /> Le sport (musculation, cyclisme, course à pied)
            </li>
            <li className="about-activity">
              <ImPointRight /> Les voyages
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "1.5rem" }}>
            "Aspirez à créer des choses qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">Soraya El Djama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;