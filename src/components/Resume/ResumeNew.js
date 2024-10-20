// Importation des dépendances nécessaires de React et de bibliothèques externes
import React, { useState, useEffect } from "react"; // Importation de React et des hooks useState et useEffect
import { Container, Row } from "react-bootstrap"; // Importation de composants de mise en page de React Bootstrap
import Button from "react-bootstrap/Button"; // Importation du composant Button de React Bootstrap
import Particle from "../Particle"; // Importation d'un composant personnalisé nommé Particle
import pdf from "../../Assets/../Assets/DEVELOPPEUR FULL STACK .pdf"; // Importation du fichier PDF à afficher
import { AiOutlineDownload } from "react-icons/ai"; // Importation d'une icône pour le bouton de téléchargement
import { Document, Page, pdfjs } from "react-pdf"; // Importation des composants nécessaires pour afficher un PDF
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Importation des styles CSS pour les annotations du PDF

// Configuration du chemin du worker de PDF.js pour le traitement des fichiers PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Définition du composant fonctionnel ResumeNew
function ResumeNew() {
  // Déclaration de l'état local pour la largeur de la fenêtre
  const [width, setWidth] = useState(1200);

  // Hook useEffect pour définir la largeur de la fenêtre lors du premier rendu du composant
  useEffect(() => {
    setWidth(window.innerWidth); // Mise à jour de l'état width avec la largeur actuelle de la fenêtre
  }, []); // Le tableau vide signifie que ce useEffect ne s'exécutera qu'une seule fois lors du premier rendu

  return (
    <div>
      <Container fluid className="resume-section"> {/* Conteneur principal pour la section de CV */}
        <Particle /> {/* Composant personnalisé qui peut contenir des effets visuels */}
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary" // Style Bootstrap pour le bouton
            href={pdf} // Lien vers le fichier PDF
            target="_blank" // Ouvre le PDF dans un nouvel onglet
            style={{ maxWidth: "250px" }} // Limite la largeur du bouton
          >
            <AiOutlineDownload /> {/* Icône de téléchargement */}
            &nbsp;Telecharger  CV {/* Texte du bouton */}
          </Button>
        </Row>

        <Row className="resume"> {/* Ligne contenant le PDF */}
          <Document file={pdf} className="d-flex justify-content-center"> {/* Chargement du fichier PDF */}
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} /> {/* Affichage de la première page du PDF avec un échelle dynamique */}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary" // Style Bootstrap pour le bouton
            href={pdf} // Lien vers le fichier PDF
            target="_blank" // Ouvre le PDF dans un nouvel onglet
            style={{ maxWidth: "250px" }} // Limite la largeur du bouton
          >
            <AiOutlineDownload /> {/* Icône de téléchargement */}
            &nbsp;Telecharger  CV {/* Texte du bouton */}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

// Exportation du composant ResumeNew pour l'utiliser dans d'autres fichiers
export default ResumeNew;
