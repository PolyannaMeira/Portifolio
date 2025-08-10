// About.jsx
import  { useState } from "react";

import {
  AboutContainer, AboutContent, AboutInfo, AboutText, ButtonGroup,
  ProfileImageContainer, ProfileImage, ProfileImageInner, Overlay, Modal, ModalHeader, Close, FrameWrap, Frame
} from "./styles";
import { SectionTitle, PrimaryButton, SecondaryButton, HighlightPurple } from "../../styles/StyledComponents";
import Foto from "../../assets/image_About_Me.png";


const About = () => {
  const [openCV, setOpenCV] = useState(false);

  return (
    <AboutContainer id="sobre">
      <AboutContent>
        <AboutInfo>
          <SectionTitle>
            Hi! <HighlightPurple>I'm Polyanna Meira</HighlightPurple>
          </SectionTitle>

          <AboutText>
            I'm a full stack developer passionate about turning ideas into
            functional, intuitive, and efficient digital solutions. I have a
            strong ability to understand client needs by putting myself in the
            user's shoes — which truly makes a difference in the final result.
          </AboutText>

          <AboutText>
            On the front-end, I work with React.js, building modern, responsive,
            and accessible interfaces, using Styled Components to ensure
            consistent and maintainable design. On the back-end, I use Node.js
            with Express to create robust, secure, and well-structured APIs.
          </AboutText>

          <AboutText>
            I'm a team player who values collaboration and enjoys sharing knowledge
            so we can all grow together. At the same time, I’m self-motivated
            and proactive when it comes to problem-solving and taking
            initiative. I’m driven by continuous learning: always studying,
            staying up to date with the latest in the JavaScript ecosystem,
            exploring best practices, and striving to improve both
            professionally and personally. I see every project as a new
            opportunity to get better.
          </AboutText>

          <AboutText>
            If you’re looking for someone who brings empathy, dedication, and a passion
            for creating meaningful solutions, let’s build something great together!
          </AboutText>

          <ButtonGroup>
            {/* manter o download */}
            <PrimaryButton as="a" href="/CV-English.pdf" download="Polyanna_Meira_CV.pdf" >
              Download CV
            </PrimaryButton>

            {/* novo: ver no navegador */}
            <SecondaryButton as="button" onClick={() => setOpenCV(true)}>
              Ver CV
            </SecondaryButton>

            <SecondaryButton as="a" href="mailto:polyannaxam@gmail.com">
              Contact
            </SecondaryButton>
          </ButtonGroup>
        </AboutInfo>

        <ProfileImageContainer>
          <ProfileImage>
            <ProfileImageInner>
              <img
                src={Foto}
                alt="Foto de Polyanna Meira"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
              />
            </ProfileImageInner>
          </ProfileImage>
        </ProfileImageContainer>
      </AboutContent>

      {/* Modal com PDF */}
      {openCV && (
        <Overlay role="dialog" aria-modal="true" aria-label="Visualizar CV em PDF">
          <Modal>
            <ModalHeader>
              <span>CV — Polyanna Meira</span>
              <Close onClick={() => setOpenCV(false)} aria-label="Fechar">×</Close>
            </ModalHeader>
            <FrameWrap>
              <Frame
                src="/CV-English.pdf#view=FitH"
  				title="CV — Polyanna Meira"
              />
            </FrameWrap>
          </Modal>
        </Overlay>
      )}
    </AboutContainer>
  );
};

export default About;
