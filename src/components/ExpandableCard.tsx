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
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontWeight: 600,
              fontSize: "1.5em",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Hola, mi nombre es César Pérez Esquivel.
          </h3>
          <h4
            style={{
              fontWeight: 600,
              fontSize: "1.5em",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
           Bienvenido a mi currículum web.
          </h4>
        </div>
        <div
          style={{
            overflowY: "auto",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() => setIsCardExpanded(!isCardExpanded)}
        >
          <img
            style={{
              width: isCardExpanded ? "24rem" : "17.5rem",
              height: "auto",
            }}
            alt="Sobre mi"
            src="/fotoPerfil.jpg"
          />
          {isCardExpanded && (
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                fontSize: "1em",
              }}
            >
              <h4 style={{ fontSize: "1.2em", fontWeight: 600 }}>
                "Con determinación y dedicación, alcanzaré mis metas laborales."
              </h4>
              <p>
                Soy un estudiante universitario de la UCR, actualmente cursando
                la carrera de Informática Empresarial, y me encuentro en la
                constante búsqueda de nuevas oportunidades y desafíos que me
                permitan crecer tanto a nivel profesional como personal.
              </p>
              <p>
                Mi experiencia en servicio al cliente ha fortalecido mis
                habilidades de comunicación y empatía, mientras que mi
                capacidad para trabajar bajo presión me ha enseñado a mantener
                la calma y la eficiencia en situaciones desafiantes.
              </p>
              <p>
                Aspiro a encontrar oportunidades en las que pueda seguir
                desafiándome a mí mismo, cultivando mis habilidades y
                alcanzando nuevos niveles de excelencia profesional y personal.
              </p>
            </section>
          )}
        </div>
      </div>
    </MagicCard>
  );
}
