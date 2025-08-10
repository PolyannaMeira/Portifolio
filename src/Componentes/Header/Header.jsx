import { useState } from "react";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NavMenu,
  NavLink,
  MobileMenuButton
} from './styles';

const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Portfólio</Logo>
        
        <NavMenu className={menuOpen ? "open" : ""}>
  <NavLink href="#sobre" onClick={() => setMenuOpen(false)}>About Me</NavLink>
  <NavLink href="#tecnologias" onClick={() => setMenuOpen(false)}>Technologies</NavLink>
  <NavLink href="#projetos" onClick={() => setMenuOpen(false)}>Projects</NavLink>
  <NavLink href="#certificados" onClick={() => setMenuOpen(false)}>Certificate</NavLink>
  <NavLink href="#contato" onClick={() => setMenuOpen(false)}>Contact</NavLink>
</NavMenu>
        
        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
