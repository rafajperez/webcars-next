"use client";

import styled from "styled-components";
import CarCard from "../components/CarCard";
import Navbar from "../components/Navbar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  width: 100%;
  padding: 120px 20px;
  background-color: var(--brand-primary);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  max-width: 900px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
`;

const FeaturedSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--text-primary);
    margin-bottom: 40px;
    font-size: 2.2rem;
  }
`;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  width: 100%;
`;

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <HeroSection>
        <HeroTitle>Encontre o Veículo Perfeito para a Sua Família</HeroTitle>
        <HeroDescription>
          Na WebCars, entendemos que um carro é mais do que apenas um meio de
          transporte: é o palco para memórias inesquecíveis. Nossa garagem
          oferece uma seleção rigorosa de veículos espaçosos, seguros e
          confortáveis, garantindo que cada viagem em família seja uma
          experiência incrível e com total tranquilidade.
        </HeroDescription>
      </HeroSection>

      <MainContent>
        <FeaturedSection>
          <h2>Nossos Veículos em Destaque</h2>
          <CardsGrid>
            <CarCard
              marca="Toyota"
              modelo="Corolla Cross"
              ano="2024"
              km={15000}
              imagem="https://via.placeholder.com/320x200?text=Toyota+Corolla+Cross"
              itens={["Ar Condicionado", "Direção Elétrica", "Bancos de Couro"]}
            />
            <CarCard
              marca="Jeep"
              modelo="Compass"
              ano="2023"
              km={32000}
              imagem="https://via.placeholder.com/320x200?text=Jeep+Compass"
              itens={["Teto Solar", "Sensor de Ré", "Tração 4x4"]}
            />
            <CarCard
              marca="Honda"
              modelo="HR-V"
              ano="2024"
              km={5000}
              imagem="https://via.placeholder.com/320x200?text=Honda+HR-V"
              itens={["Multimídia", "Câmera de Ré", "Piloto Automático"]}
            />
          </CardsGrid>
        </FeaturedSection>
      </MainContent>
    </PageContainer>
  );
}
