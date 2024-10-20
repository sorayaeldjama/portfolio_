import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import sharevista from "../../Assets/Projects/sharevista.png";
import suicide from "../../Assets/Projects/suicide.png";
import my_restaurant from "../../Assets/Projects/my-restaurant.png";

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
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sharevista}
              isBlog={false}
              title="Share Vista"
              description="ShareVista est un réseau social interactif conçu pour partager des ressources et interagir avec des amis. Développé avec React.js, Material-UI, Node.js et MySQL, il permet aux utilisateurs de publier des contenus, de réagir aux publications et de collaborer facilement dans un espace convivial. Un outil idéal pour se connecter, partager et échanger des idées dans une atmosphère détendue."
              ghLink="https://github.com/sorayaeldjama/cda_social_media_front_end"
              demoLink="https://cda-social-media-front-end.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={my_restaurant}
              isBlog={false}
              title="My Restaurant"
              description="Notre site de restaurant, créé avec React et Material-UI, offre une expérience utilisateur moderne et fluide. Il est conçu pour afficher notre menu, prendre des réservations et fournir des informations sur notre établissement tout en garantissant une navigation agréable."
              ghLink="https://github.com/sorayaeldjama/mys-restaurant"
              demoLink="https://mys-restaurant-btqx.vercel.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lagertha Transfer"
              description={<div
                dangerouslySetInnerHTML={{
                  __html: `Pendant mon alternance chez Lagertha.tech, j'ai travaillé comme développeuse front-end sur le projet Lagertha Transfer, une plateforme de partage de fichiers volumineux similaire à WeTransfer.<br><br>
                  -- Conception de l'interface : Développement d'une interface utilisateur moderne et responsive en utilisant Next.js et Material-UI (MUI) pour créer des composants réactifs et ergonomiques.<br><br>
                  -- Gestion d'état : Utilisation de Redux pour centraliser et gérer l'état global de l'application, notamment pour le suivi des fichiers téléchargés et des sessions utilisateur.<br><br>
                  -- Hooks React : Implémentation de hooks comme useEffect pour gérer les effets de bord, comme les appels API pour récupérer ou envoyer des données côté front-end. Utilisation de useCallback pour optimiser les performances, notamment en mémorisant certaines fonctions (comme la gestion d'événements ou de formulaires) afin d'éviter des rendus inutiles.<br><br>
                  -- Expérience utilisateur optimisée : Mise en place de la gestion des erreurs, des notifications visuelles en temps réel pour informer les utilisateurs lors des uploads, et des liens de téléchargement sécurisés.`
                }}
              />}
              // ghLink="https://github.com/sorayaeldjama/lagertha"
              demoLink=""              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
