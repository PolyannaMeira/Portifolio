
import {
  TechContainer,
  TechContent,
  TechGrid,
  TechCard,
  TechIcon,
  TechName,
  TechCategory
} from './styles';
import { SectionTitle, HighlightOrange } from '../../styles/StyledComponents';
import { SiCss3, SiExpress, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiStyledcomponents } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";


const Technologies = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
	{ name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" />, category: 'Frontend' },
	{ name: 'HTML5', icon: <SiHtml5 color="#E44D26" />, category: 'Frontend' },
	{ name: 'CSS3', icon: <SiCss3 color="#1572B6" />, category: 'Frontend' },
	{ name: 'Node.js', icon: <SiNodedotjs color="#339933" />, category: 'Backend' },
	{ name: 'Express', icon: <SiExpress color="#ffffff" />, category: 'Backend' },
	{ name: 'MongoDB', icon: <SiMongodb color="#47A248" />, category: 'Backend' },
  { name: 'SQL', icon: <PiFileSql  color="#ffffff" />, category: 'Backend' },
	{ name: 'GitHub', icon: <SiGithub color="#ffffff" />, category: 'Ferramentas' },
	{ name: 'Styled Components', icon: <SiStyledcomponents color="#DB7093" />, category: 'Frontend' },
  ];

  return (
    <TechContainer id="tecnologias">
      <TechContent>
        <SectionTitle>Minhas <HighlightOrange>Tecnologias</HighlightOrange></SectionTitle>
        <TechGrid>
          {technologies.map((tech) => (
            <TechCard key={tech.name}>
              <TechIcon>{tech.icon}</TechIcon>
              <TechName>{tech.name}</TechName>
              <TechCategory>{tech.category}</TechCategory>
            </TechCard>
          ))}
        </TechGrid>
      </TechContent>
    </TechContainer>
  );
};

export default Technologies;
