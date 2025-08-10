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

export const Overlay = styled.div`
  position: fixed; inset: 0; background: rgba(0,0,0,.55);
  display: flex; align-items: center; justify-content: center; z-index: 1000;
`;

export const Modal = styled.div`
  width: min(1000px, 92vw);
  height: min(90vh, 820px);
  background: #0f0f10; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,.4);
  display: flex; flex-direction: column; overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,.06);
  color: #fff; font-weight: 600;
`;

export const Close = styled.button`
  border: 0; background: transparent; color: #fff; font-size: 22px; cursor: pointer;
  line-height: 1; padding: 4px 8px; border-radius: 8px;
  &:hover { background: rgba(255,255,255,.08); }
`;

export const FrameWrap = styled.div`
  flex: 1; padding: 12px;
`;

export const Frame = styled.iframe`
  width: 100%; height: 100%; border: 0; border-radius: 12px;
`;
