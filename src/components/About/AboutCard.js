import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "justify" }}>
            <p>
              Bonjour, je suis <span className="purple">Soraya El Djama</span>, Ingénieure QA.
            </p>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;