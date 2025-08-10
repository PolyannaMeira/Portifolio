import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Section = styled.section`
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50%;
    height: 4px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PrimaryButton = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #7928ca;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled.button`
  background-color: var(--secondary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ea580c;
    transform: translateY(-2px);
  }
`;

export const Card = styled.div`
  background-color: var(--background-light);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #333;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Flex = styled.div`
  display: flex;
  
  ${props => props.direction && `flex-direction: ${props.direction};`}
  ${props => props.justify && `justify-content: ${props.justify};`}
  ${props => props.align && `align-items: ${props.align};`}
  ${props => props.gap && `gap: ${props.gap}rem;`}
  ${props => props.wrap && `flex-wrap: ${props.wrap};`}
  
  @media (max-width: 768px) {
    ${props => props.mobileDirection && `flex-direction: ${props.mobileDirection};`}
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 12}, 1fr);
  gap: ${props => props.gap || 1}rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(${props => props.tabletColumns || 6}, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(${props => props.mobileColumns || 4}, 1fr);
  }
`;

export const HighlightPurple = styled.span`
  color: var(--primary);
`;

export const HighlightOrange = styled.span`
  color: var(--secondary);
`;
