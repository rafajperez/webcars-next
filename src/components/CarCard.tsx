"use client";

import React from "react";
import styled from "styled-components";

interface CarCardProps {
  marca: string;
  modelo: string;
  ano: string | number;
  km: string | number;
  imagem: string;
  itens: string[];
}

const CardContainer = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  width: 320px;
  background-color: var(--surface);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CarImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CarBrand = styled.span`
  color: var(--brand-primary);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

const CarTitle = styled.h3`
  margin: 0 0 12px 0;
  color: var(--text-primary);
  font-size: 1.4rem;
  font-weight: 700;
`;

const CarDetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.95rem;
`;

const CarDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`;

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ItemBadge = styled.li`
  background-color: var(--background);
  color: var(--text-secondary);
  font-size: 0.8rem;
  padding: 6px 10px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
`;

const ActionButton = styled.button`
  margin-top: auto;
  background-color: var(--brand-secondary);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #219a52; /* Um tom mais escuro de verde */
  }
`;

const CarCard = ({ marca, modelo, ano, km, imagem, itens }: CarCardProps) => {
  // Helper para formatar quilometragem (ex: 50000 -> 50.000)
  const formattedKm = Number(km).toLocaleString('pt-BR');

  return (
    <CardContainer>
      <CarImage src={imagem} alt={`${marca} ${modelo}`} />
      <ContentWrapper>
        <CarBrand>{marca}</CarBrand>
        <CarTitle>{modelo}</CarTitle>
        
        <CarDetailsRow>
          <CarDetail>
            📅 {ano}
          </CarDetail>
          <CarDetail>
            🛣️ {formattedKm} km
          </CarDetail>
        </CarDetailsRow>

        <ItemsList>
          {itens.map((item, index) => (
            <ItemBadge key={index}>{item}</ItemBadge>
          ))}
        </ItemsList>
        
        <ActionButton>Ver Detalhes</ActionButton>
      </ContentWrapper>
    </CardContainer>
  );
};

export default CarCard;
