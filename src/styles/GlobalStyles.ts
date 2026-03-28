"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Brand Colors - WebCars (Focado em Famílias) */
    --brand-primary: #1A5276; /* Azul Confiável (Segurança) */
    --brand-secondary: #28B463; /* Verde Natureza/Tranquilidade */
    --brand-accent: #F39C12; /* Laranja Quente/Acolhedor */
    
    /* Backgrounds & Surfaces */
    --background: #F8F9FA; /* Cinza claro e limpo */
    --surface: #FFFFFF;
    
    /* Text Colors */
    --text-primary: #2C3E50; /* Cinza-azulado escuro para melhor legibilidade */
    --text-secondary: #7F8C8D; /* Cinza neutro para detalhes */
    
    /* Borders & Dividers */
    --border-color: #E5E8E8;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #121212;
      --surface: #1E1E1E;
      --text-primary: #F8F9FA;
      --text-secondary: #B3B6B7;
      --brand-primary: #3498DB; /* Azul mais claro para destacar no fundo escuro */
      --border-color: #333333;
    }
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    height: 100%;
  }

  body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    color: var(--text-primary);
    background-color: var(--background);
    font-family: var(--font-geist-sans, system-ui, -apple-system, sans-serif);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;
