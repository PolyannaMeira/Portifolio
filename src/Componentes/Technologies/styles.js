import styled from 'styled-components';

export const TechContainer = styled.section`
  padding: 5rem 0;
  background-color: var(--background-light);
`;

export const TechContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const TechCard = styled.div`
  background-color: var(--background);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const TechIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const TechName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const TechCategory = styled.span`
  font-size: 0.875rem;
  color: var(--text-muted);
`;
