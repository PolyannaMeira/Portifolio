import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--background-light);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--background);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }
`;

export const ContactButton = styled.a`
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #7928ca;
    transform: translateY(-2px);
  }
`;

export const Copyright = styled.div`
  text-align: center;
`;

export const CopyrightText = styled.p`
  color: var(--text-muted);
  margin-bottom: 0.5rem;
`;

export const CreditText = styled.p`
  color: var(--text-muted);
  font-size: 0.875rem;
`;
