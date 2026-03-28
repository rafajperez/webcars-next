"use client";
import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffffff;
  border-bottom: 1px solid var(--border-color);
`;

const NavLeft = styled.div`
  display: flex;
`;

const NavRight = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--brand-primary);
  font-weight: 600;
  transition: color 0.2s;

  &:hover {
    color: darkblue;
  }
`;

export default function Navbar() {
  return (
    <NavContainer>
      <NavLeft>
        <NavLink href="/">Voltar</NavLink>
      </NavLeft>
      <NavRight>
        <NavLink href="/carros">Carros</NavLink>
        <NavLink href="/sobre-nos">Sobre Nós</NavLink>
        <NavLink href="/contatos">Contatos</NavLink>
      </NavRight>
    </NavContainer>
  );
}
