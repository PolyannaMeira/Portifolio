import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  padding: 5rem 0;
  background-color: var(--background-light);
`;

export const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background-color: var(--background);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #333;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--secondary);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ProjectDescription = styled.p`
  color: var(--text);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TechTag = styled.span`
  background-color: var(--background-light);
  color: var(--text-muted);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
`;

export const ProjectLink = styled.a`
  color: var(--secondary);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;
