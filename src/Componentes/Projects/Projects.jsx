
import {
  ProjectsContainer,
  ProjectsContent,
  ProjectsGrid,
  ProjectCard,
  ProjectIcon,
  ProjectTitle,
  ProjectDescription,
  TechTags,
  TechTag,
  ProjectLink
} from './styles';
import { SectionTitle, HighlightOrange } from '../../styles/StyledComponents';
import { GiCoffeeCup, GiHamburger } from "react-icons/gi";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


const Projects = () => {
  const projects = [
    {
  title: 'Coffee shop landing page',
  description: 'Modern landing page for a coffee shop with an attractive design. Built to highlight the brand and boost customer engagement.',
  technologies: ['HTML', 'CSS'],
  icon: <GiCoffeeCup />,
  link: 'https://mineiricecafe.netlify.app'
},


    {
      title: 'Travel Agency – Website',
      description: 'Development of a responsive website for a travel agency, showcasing exclusive travel packages with images, detailed descriptions, and a direct WhatsApp contact button. Focused on intuitive design, user experience, and sales conversion.',
      technologies: ['React', 'Styled-components'],
      icon: <FaPlaneDeparture />,
      link: 'https://vm-turismo.netlify.app'
    },
    {
      title: 'Project - Matcha',
      description: 'Projeto-Matcha is a small front-end project to practice scroll-driven image transitions using GSAP and the ScrollTrigger plugin.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: <IoLogoJavascript />,
      link: 'https://github.com/PolyannaMeira/Projeto-Matcha/tree/main'
    },

    {
      title: 'Job Application Tracker',
      description: 'A platform to help users organize and manage their job applications. Users can register, log in, and track applications, interview dates, notes, and more through a user-friendly interface.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      icon: <PiSuitcaseSimpleFill />,
      link: 'https://job-application-tracker-front-end-nu.vercel.app'
    },
    {
      title: 'Burger Shop Management App',
      description: 'Application for order management, the customer can place the order and payment and the administrator can update the order, include, edit and delete products.',
      technologies: ['React.js', 'Styled-components', 'Node.js', 'MongoDB'],
      icon: <GiHamburger />,
      link: 'https://github.com/PolyannaMeira/hamburgueria-frontend'
    },
    
    
  ];

  return (
    <ProjectsContainer id="projetos">
      <ProjectsContent>
        <SectionTitle>Meus <HighlightOrange>Projetos</HighlightOrange></SectionTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.title}>
              <ProjectIcon>{project.icon}</ProjectIcon>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechTags>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechTags>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
  

                See project →
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;
