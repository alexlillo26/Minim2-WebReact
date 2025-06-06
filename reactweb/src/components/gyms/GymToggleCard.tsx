import React, { useState } from "react";
import styled from "styled-components";
import GymLogin from "./GymLogin";
import GymRegistration from "./GymRegistration";
import { useLanguage } from "../../context/LanguageContext";

const GymToggleCard: React.FC = () => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
    console.log(isFlipped ? t("flippingToLogin") : t("flippingToRegister"));
  };

  return (
    <StyledWrapper>
      <div className="card-container">
        <button className="toggle-btn" onClick={handleToggle}>
          {isFlipped ? t("toggleToLogin") : t("toggleToRegister")}
        </button>
        <div className={`flip-card__inner ${isFlipped ? "flipped" : ""}`}>
          <div className="flip-card__front">
            <GymLogin />
          </div>
          <div className="flip-card__back">
            <GymRegistration />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding 0 20px;

  .card-container {
    position: relative;
    width: 400px; /* Ajustar el ancho */
    height: 350px; /* Altura dinámica */
    perspective: 1000px; /* Necesario para el efecto 3D */
  }

  .flip-card__inner {
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    position: relative;
  }

  .flip-card__inner.flipped {
    transform: rotateY(180deg);
  }

  .flip-card__front,
  .flip-card__back {
    position: absolute;
    width: 112%;
    height: auto; /* Altura dinámica */
    backface-visibility: hidden;
    top: 10%;
    left: 10%;
    background-color: rgba(26, 26, 26, 0.9); /* Fondo oscuro con transparencia */
    color: white; /* Color del texto */
    display: flex;
    flex-direction: column; /* Alinear contenido en columna */
    justify-content: center; /* Centrar verticalmente */
    align-items: center;
    border-radius: 10x; /* Bordes redondeados */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
    padding: 20px; /* Espaciado interno */
    box-shadow: 0 0 15px rgba(214, 40, 40, 0.4);

  }

  .flip-card__back {
    transform: rotateY(180deg);
  }

  .flip-card__front {
    z-index: 2;
  }

  .flip-card__back {
    z-index: 1;
  }

  .toggle-btn {
    position: absolute;
    top: -60px; /* Ajustar la posición del botón */
    left: 50%;
    transform: translateX(-50%); /* Centrar el botón horizontalmente */
    background-color: #d62828;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: auto; /* Ajustar el ancho del botón */
    height: 50px; /* Asegurar altura uniforme */
    display: flex; /* Centrar contenido */
    align-items: center; /* Centrar verticalmente */
    justify-content: center; /* Centrar horizontalmente */
  }

  .toggle-btn:hover {
    background-color: #a31f1f;
  }
`;

export default GymToggleCard;
