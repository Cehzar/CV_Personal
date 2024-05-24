"use client";

import React, { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";

export default function ExpandableCard(): JSX.Element {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          width: isCardExpanded ? "40rem" : "17rem",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          padding: "1.35rem 0",
          color: isCardExpanded ? "white" : "currentColor",
          alignItems: "center", // Centra el contenido horizontalmente
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center", // Centra el texto horizontalmente
          }}
        >
          <h3
            style={{
              fontWeight: 600,
              fontSize: "1.4em",
              margin: 0, // Quita el margen predeterminado
            }}
          >
            Sobre mi
          </h3>
        </div>
        <div
          style={{
            overflowY: "auto",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centra la imagen y el texto cuando expandido
          }}
          onClick={() => setIsCardExpanded(!isCardExpanded)}
        >
          <img
            style={{
              width: isCardExpanded ? "24rem" : "17.5rem",
              height: "auto",
            }}
            alt="Sobre mi"
            src="https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/expandable-card/mona-lisa.jpg"
          />
          {isCardExpanded && (
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center", // Centra el contenido horizontalmente
              }}
            >
              <h4 style={{ fontSize: "1.2em", fontWeight: 600 }}>
                "Con determinación y dedicación, alcanzaré mis metas laborales."
              </h4>
              <p>
                Unveil the allure of the world-renowned masterpiece, the Mona
                Lisa, displayed in the heart of the Louvre Museum in Paris.
                Painted by the illustrious Leonardo da Vinci between 1503 and
                1506, this portrait is celebrated for Mona Lisa's enigmatic
                smile that seems to change depending on the viewing angle.
              </p>
              <p>
                The exquisite blending of light and shadow, known as sfumato,
                contributes to the mystique of her expression. Da Vinci’s
                remarkable attention to detail is evident in the delicate
                veiling and the meticulous background landscapes that frame Mona
                Lisa's serene demeanor.
              </p>
              <p>
                The artistry and the mysteries enveloping the Mona Lisa continue
                to captivate audiences, making it an enduring symbol of the
                Renaissance era. Experience the magnetism of the Mona Lisa, a
                testament to Leonardo da Vinci's genius, and delve into a visual
                dialogue with a smile that has intrigued the world for
                centuries.
              </p>
            </section>
          )}
        </div>
      </div>
    </MagicCard>
  );
}
