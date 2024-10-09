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
          Mes <strong className="purple">Projets Récents</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Application de chat personnel ou espace de travail pour partager des ressources et se détendre avec des amis, construite avec React.js, Material-UI, et Firebase. Possède des fonctionnalités permettant la messagerie en temps réel, le partage d'images ainsi que des réactions sur les messages."
              ghLink="https://github.com/sorayaeldjama/lagertha"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Ma page de blog personnelle construite avec Next.js et Tailwind CSS qui extrait le contenu des fichiers markdown et les affiche avec Next.js. Prend en charge le mode sombre et facilite l'écriture de blogs en markdown."
              ghLink="https://github.com/sorayaeldjama/travel_trip/tree/main/back"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Éditeur de code et de markdown en ligne, construit avec React.js. Cet éditeur prend en charge le HTML, le CSS, et le JavaScript avec un aperçu instantané du site web. Éditeur de markdown en ligne pour la création de fichiers README avec prise en charge de GFM, des balises HTML personnalisées avec une barre d'outils et un aperçu instantané. Les deux éditeurs prennent en charge l'auto-sauvegarde avec Local Storage."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Utilisation d'un jeu de données de maladies des plantes de Kaggle pour entraîner un modèle de classification d'images à l'aide de PyTorch avec des CNN et un apprentissage par transfert. Le modèle reconnaît des feuilles malades et saines de 14 plantes différentes. J'ai atteint une précision de 98 % en utilisant le modèle pré-entraîné Resnet34."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI Pour le Bien Social"
              description="Utilisation du traitement du langage naturel (NLP) pour détecter les posts liés au suicide et les pensées suicidaires des utilisateurs dans le cyberespace, contribuant ainsi à la prévention du suicide."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Veuillez inclure un lien de démo ici
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Reconnaissance Faciale et Détection des Émotions"
              description="Entraînement d'un classificateur CNN avec le dataset 'FER-2013' à l'aide de Keras et TensorFlow. Le classificateur a prédit avec succès différents types d'émotions humaines avec une précision maximale de 60,1%. Utilisation d'OpenCV pour détecter les visages dans une image et les passer au classificateur pour prédire l'émotion de la personne."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/" <--------Veuillez inclure un lien de démo ici
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
