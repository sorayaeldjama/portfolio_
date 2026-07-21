import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "justify" }}>
            <p>
              Bonjour à tous, je suis <span className="purple">Soraya El Djama</span>.
            </p>
            
            <p>
              Un bug en production ne coûte pas seulement de l'argent : il entame la confiance des utilisateurs et l'image de marque de l'entreprise. L'Assurance Qualité n'est plus une simple étape de validation de fin de chaîne, c'est un véritable pilier stratégique.
            </p>
            
            <p>
              C’est sur le terrain que j'ai forgé cette conviction. Mon solide bagage technique, construit sur 3 années d'expérience en développement et tests (Java, Angular) et 2 années dans l'enseignement, m'a donné les clés pour comprendre les rouages internes des applications. J'y ai cultivé une exigence de fiabilité absolue en concevant des architectures robustes et en anticipant les failles structurelles.
            </p>
            
            <p>
              Aujourd’hui, en tant que <strong>Testeuse QA expérimentée</strong> (certification ISTQB en cours), j'accompagne les projets de bout en bout avec une vision qualité à 360°. Ayant mené à bien plus de 6 projets critiques, j'allie la rigueur et l'esprit critique de la QA à une maîtrise pointue de l'automatisation (Selenium, Playwright, JUnit).
            </p>
            
            <p>
              Mon profil hybride est mon atout majeur : je parle couramment le langage des développeurs. Cela me permet de documenter efficacement les processus, de diagnostiquer les bugs complexes et de fluidifier la communication technique au sein de l'entreprise.
            </p>

            <p>
              Mes domaines d'expertise couvrent notamment :
            </p>
          </div>

          <ul>
            <li className="about-activity">
              <ImPointRight /> L'automatisation E2E et les tests API (Playwright, Postman, JUnit)
            </li>
            <li className="about-activity">
              <ImPointRight /> Les tests de conformité et de recette applicative (Environnements Web et SAP)
            </li>
            <li className="about-activity">
              <ImPointRight /> La gestion du cycle de vie des anomalies (Jira, Xray)
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