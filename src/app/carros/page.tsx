"use client";

import React, { useMemo } from "react";
import styled from "styled-components";
import Navbar from "@/components/Navbar";
import CarCard from "@/components/CarCard";

const PageContainer = styled.main`
  background-color: var(--background);
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 10px;
`;

const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  justify-items: center;
`;

// Função para gerar os 16 carros aleatórios
const generateRandomCars = () => {
  const marcas = [
    "Toyota",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "Honda",
    "Hyundai",
    "Jeep",
    "Nissan",
  ];
  const modelos: { [key: string]: string[] } = {
    Toyota: ["Corolla", "Hilux", "SW4"],
    Ford: ["Ranger", "Territory", "Bronco"],
    Chevrolet: ["Onix", "Tracker", "S10"],
    Volkswagen: ["Polo", "Nivus", "Taos"],
    Honda: ["Civic", "HR-V", "City"],
    Hyundai: ["HB20", "Creta", "Tucson"],
    Jeep: ["Compass", "Renegade", "Commander"],
    Nissan: ["Kicks", "Sentra", "Frontier"],
  };
  const listaItens = [
    "Ar Condicionado",
    "Direção Hidráulica",
    "Câmbio Automático",
    "Teto Solar",
    "Bancos de Couro",
    "Sensor de Ré",
    "Turbo",
  ];

  return Array.from({ length: 16 }, (_, i) => {
    const marca = marcas[Math.floor(Math.random() * marcas.length)];
    const modelo =
      modelos[marca][Math.floor(Math.random() * modelos[marca].length)];

    return {
      id: i,
      marca,
      modelo,
      ano: Math.floor(Math.random() * (2025 - 2018 + 1)) + 2018,
      km: Math.floor(Math.random() * 100000),
      imagem: `https://picsum.photos/seed/${i + 40}/400/300`, // Imagens reais aleatórias
      itens: listaItens.sort(() => 0.5 - Math.random()).slice(0, 3),
    };
  });
};

const CarrosPage = () => {
  const carros = useMemo(() => generateRandomCars(), []);

  return (
    <PageContainer>
      <Navbar />
      <ContentWrapper>
        <HeaderSection>
          <Title>Nosso Inventário</Title>
          <p style={{ color: "var(--text-secondary)" }}>
            Confira nossos veículos selecionados para o conforto e segurança da
            sua família.
          </p>
        </HeaderSection>

        <CarGrid>
          {carros.map((carro) => (
            <CarCard
              key={carro.id}
              marca={carro.marca}
              modelo={carro.modelo}
              ano={carro.ano}
              km={carro.km}
              imagem={carro.imagem}
              itens={carro.itens}
            />
          ))}
        </CarGrid>
      </ContentWrapper>
    </PageContainer>
  );
};

export default CarrosPage;
