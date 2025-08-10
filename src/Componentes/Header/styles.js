import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--background-light);
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;
  
   gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    background: #222; // ou a cor do seu header
    position: absolute;
    top: 100%; // logo abaixo do header
    left: 0;
    width: 100vw;
    right: 0;
    z-index: 100;
    padding: 2rem 0;
    align-items: center;
    transition: right 0.3s;
    display: none; // esconde por padrão no mobile

    // Mostra quando o menu está aberto
    &.open {
      display: flex;
    }
  }

`;

export const NavLink = styled.a`
  color: var(--text);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

export const MobileMenuButton = styled.button`
  background: transparent;
  color: var(--text);
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;
