import { useState } from 'react';
import {
  CertificatesContainer,
  CertificatesContent,
  CertificatesList,
  CertificateCard,
  CertificateHeader,
  CertificateInfo,
  CertificateTitle,
  CertificateMeta,
  CertificateDescription,
  ViewButton
} from './styles';
import { SectionTitle, HighlightPurple } from '../../styles/StyledComponents';
import CertHYFB from "../../assets/Certificado Hack your future.jpg";
import CertCapgemini from "../../assets/Certificado Capgemini.jpg";
import CertEnglish from "../../assets/Certificado Ingles.jpg";
import CertDevClub1 from "../../assets/Certificado_Dev_Club_1.jpg";
import CertDevClub2 from "../../assets/Certificado_Dev_Club_2.jpg";
import { FaArrowDown } from "react-icons/fa";

const Certificates = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const certificates = [
    {
      title: 'Full Stack Web Development',
      institution: 'Hack Your Future Belgium',
      date: 'October 2024',
      description: 'Complete web development course focusing on modern technologies such as React, Node.js and databases.',
      image: CertHYFB
    },
    {
      title: 'Full Stack Developer',
      institution: 'Dev Club',
      date: 'Outubro 2025',
      description: 'Complete web development course focusing on modern technologies such as React, Node.js and databases.',
      image: [CertDevClub1, CertDevClub2]
    },
    {
      title: 'Tech4 Positive Futures Challenge 2024',
      institution: 'Capgemini',
      date: 'Novembro 2024',
      description: "Participation in an Environmental Sustainability Challenge focused on Biodiversity and Climate Adaptation",
      image: CertCapgemini
    },
    {
      title: 'English Certificate',
      institution: 'EF Set',
      date: 'Jan 2025',
      description: 'English C2 Proficient .',
      image: CertEnglish,
    }

  ];

  return (
    <CertificatesContainer id="certificados">
      <CertificatesContent>
        <SectionTitle>My <HighlightPurple>Certificates</HighlightPurple></SectionTitle>
        <CertificatesList>
          {certificates.map((cert, idx) => (
            <CertificateCard key={`${cert.title}-${cert.institution}`}>
              <CertificateHeader>
                <CertificateInfo>
                  <CertificateTitle>{cert.title}</CertificateTitle>
                  <CertificateMeta>{cert.institution} • {cert.date}</CertificateMeta>
                </CertificateInfo>
                <ViewButton onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                  View certificate
                  <FaArrowDown title="Arrow to view certificate" />

                </ViewButton>
              </CertificateHeader>
              {openIndex === idx && cert.image && (
  Array.isArray(cert.image) ? (
    cert.image.map((imgSrc, index) => (
      <img
        key={index}
        src={imgSrc}
        alt={`${cert.title} ${index + 1}`}
        style={{
          width: "100%",
          maxWidth: 400,
          margin: "1rem 0",
          borderRadius: 8,
          display: "block"
        }}
      />
    ))
  ) : (
    <img
      src={cert.image}
      alt={cert.title}
      style={{
        width: "100%",
        maxWidth: 400,
        margin: "1rem 0",
        borderRadius: 8,
        display: "block"
      }}
    />
  )
)}


              <CertificateDescription>{cert.description}</CertificateDescription>
            </CertificateCard>
          ))}
        </CertificatesList>
      </CertificatesContent>
    </CertificatesContainer>
  );
};

export default Certificates;