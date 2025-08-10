import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 5rem 0;
  
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutInfo = styled.div`
  order: 1;
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--text);
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  order: 2;
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

export const ProfileImage = styled.div`
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  background: linear-gradient(to bottom right, var(--primary), var(--secondary));
  padding: 0.25rem;
  
  @media (max-width: 480px) {
    width: 12rem;
    height: 12rem;
  }
`;

export const ProfileImageInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;
