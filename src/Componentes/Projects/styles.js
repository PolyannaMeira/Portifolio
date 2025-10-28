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
  /* One project per row so images appear larger and clearer */
  grid-template-columns: 1fr;
  gap: 2.25rem;
  align-items: start;
  justify-items: stretch;
`;

export const ProjectCard = styled.div`
  background-color: var(--background);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #333;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  height: auto;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--secondary);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

/* Media / Carousel styles */
export const ProjectMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 35%;
  max-width: 240px;
  margin: 0;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 240px;
  height: 160px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin: 0 auto 1rem;
  background: var(--background-light);
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);

  @media (max-width: 768px) {
    max-width: 100%;
    height: 220px;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  filter: contrast(1.03) saturate(1.04);
  will-change: transform;
`;

export const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 0.25rem;
  pointer-events: none;
`;

export const CarouselButton = styled.button`
  pointer-events: auto;
  background: rgba(0,0,0,0.35);
  color: #fff;
  border: none;
  padding: 0.35rem 0.5rem;
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
`;

export const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => (props.active ? 'var(--secondary)' : 'rgba(0,0,0,0.2)')};
  cursor: pointer;
`;

export const CarouselOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
`;

export const ModalImage = styled.img`
  /* Reduced modal size to be less dominant on screen */
  max-width: 40vw;
  max-height: 40vh;
  width: auto;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
  filter: contrast(1.04) saturate(1.06);
  cursor: zoom-out;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10001;
  box-shadow: 0 6px 18px rgba(0,0,0,0.4);

  &.left {
    left: -60px;
  }

  &.right {
    right: -60px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10000;
  box-shadow: 0 6px 18px rgba(0,0,0,0.4);
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1 1 auto;
`;

export const TechRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
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
