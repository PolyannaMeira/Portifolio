
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import {
  FooterContainer,
  FooterContent,
  FooterTitle,
  SocialLinks,
  SocialLink,
  ContactButton,
  Copyright,
  CopyrightText,
  CreditText
} from './styles';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <SiLinkedin color='#0A66C2'/>, url: 'https://www.linkedin.com/in/polyanna-meira/' },
    { name: 'GitHub', icon: <SiGithub color='#ffffff'/>, url: 'https://github.com/PolyannaMeira' },
    { name: 'Instagram', icon: <SiInstagram color='#C13584'/>, url: 'https://instagram.com/polyanna_meira' },
    { name: 'WhatsApp', icon: <SiWhatsapp color='#25D366'/>, url: 'https://wa.me/32465383257' }
  ];

  return (
    <FooterContainer id="contato">
      <FooterContent>
        <FooterTitle>Let's talk</FooterTitle>
        
        <SocialLinks>
          {socialLinks.map((link) => (
            <SocialLink 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </SocialLink>
          ))}
        </SocialLinks>
        
        <ContactButton 
          as="a" href="mailto:polyannaxam@gmail.com"
        >
          Get in Touch
        </ContactButton>
        
        <Copyright>
          <CopyrightText>
            &copy; {new Date().getFullYear()} - All rights reserved
          </CopyrightText>
          
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
