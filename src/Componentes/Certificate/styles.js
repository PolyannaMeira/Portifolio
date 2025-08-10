import styled from 'styled-components';

export const CertificatesContainer = styled.section`
  padding: 5rem 0;
`;

export const CertificatesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const CertificatesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CertificateCard = styled.div`
  background-color: var(--background-light);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #333;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(147, 51, 234, 0.1);
  }
`;

export const CertificateHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CertificateInfo = styled.div`
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const CertificateTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const CertificateMeta = styled.p`
  font-size: 0.875rem;
  color: var(--text-muted);
`;

export const CertificateDescription = styled.p`
  color: var(--text);
`;

export const ViewButton = styled.button`
  background: transparent;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary);
  }
`;
