import {
	ProjectsContainer,
	ProjectsContent,
	ProjectsGrid,
	ProjectCard,
	ProjectInfo,
	ProjectTitle,
	ProjectDescription,
	TechRow,
	TechTags,
	TechTag,
	ProjectLink,
} from "./styles";
import { SectionTitle, HighlightOrange } from "../../styles/StyledComponents";
import Carousel from "./Carousel";
import placeholderImg from "../../assets/background.jpg";

const Projects = () => {
	const projects = [
		{
			title: "Coffee shop landing page",
			description:
				"Modern landing page for a coffee shop with an attractive design. Built to highlight the brand and boost customer engagement.",
			technologies: ["HTML", "CSS"],

			images: [
				"/Mineirice_Cafe/Home.png",
				"/Mineirice_Cafe/Cardapio.png",
				"/Mineirice_Cafe/Fale_conosco.png",
			],
			link: "https://mineiricecafe.netlify.app",
		},

		{
			title: "Travel Agency – Website",
			description:
				"Development of a responsive website for a travel agency, showcasing exclusive travel packages with images, detailed descriptions, and a direct WhatsApp contact button. Focused on intuitive design, user experience, and sales conversion.",
			technologies: ["React", "Styled-components"],

			images: ["/Vm_Turismo/Home (2).png", "/Vm_Turismo/Nosso_pacotes.png"],
			link: "https://vm-turismo.netlify.app",
		},
		{
			title: "Project - Matcha",
			description:
				"Projeto-Matcha is a small front-end project to practice scroll-driven image transitions using GSAP and the ScrollTrigger plugin.",
			technologies: ["HTML", "CSS", "JavaScript"],

			images: ["/Matcha/Matcha_home.png", "/Matcha/Matcha-02.png"],
			link: "https://github.com/PolyannaMeira/Projeto-Matcha/tree/main",
		},

		{
			title: "Job Application Tracker",
			description:
				"A platform to help users organize and manage their job applications. Users can register, log in, and track applications, interview dates, notes, and more through a user-friendly interface.",
			technologies: ["React", "Node.js", "PostgreSQL", "Express"],
			images: [
				"/Job_Application/01.png",
				"/Job_Application/02.png",
				"/Job_Application/03.png",
				"/Job_Application/04.png",
			],
			link: "https://job-application-tracker-front-end-nu.vercel.app",
		},
		{
			title: "Burger Shop Management App",
			description:
				"Application for order management, the customer can place the order and payment and the administrator can update the order, include, edit and delete products.",
			technologies: ["React.js", "Styled-components", "Node.js", "MongoDB"],

			images: [
				"/Hamburgueria/Menu_screen.png",
				"/Hamburgueria/Product_screen.png",
				"/Hamburgueria/Login.png",
				"/Hamburgueria/cart_screen.png",
				"/Hamburgueria/admpin_screen.png",
			],
			link: "https://github.com/PolyannaMeira/hamburgueria-frontend",
		},
		{
			title: "Project - DevBills",
			description:
				"DevBills is a project focused on managing and tracking expenses, providing users with a clear overview of their financial situation.",
			technologies: ["TypeScript", "Tailwind CSS", "Node.js"],

			images: [
				"/DevBills/Dashboard.png",
				"/DevBills/Tela_de_Login.png",
				"/DevBills/Transações.png",
			],
			link: "https://github.com/PolyannaMeira/DevBills-FrontEnd",
		},
	];

	return (
		<ProjectsContainer id="projetos">
			<ProjectsContent>
				<SectionTitle>
					Meus <HighlightOrange>Projetos</HighlightOrange>
				</SectionTitle>
				<ProjectsGrid>
					{projects.map((project) => (
						<ProjectCard key={project.title}>
							<Carousel
								images={project.images?.map((img) =>
									typeof img === "string" ? encodeURI(img) : img,
								)}
								icon={project.icon}
								placeholder={placeholderImg}
							/>
							<ProjectInfo>
								<ProjectTitle>{project.title}</ProjectTitle>
								<ProjectDescription>{project.description}</ProjectDescription>
								<TechRow>
									<TechTags>
										{project.technologies?.map((tech) => (
											<TechTag key={tech}>{tech}</TechTag>
										))}
									</TechTags>
									<ProjectLink
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										See project →
									</ProjectLink>
								</TechRow>
							</ProjectInfo>
						</ProjectCard>
					))}
				</ProjectsGrid>
			</ProjectsContent>
		</ProjectsContainer>
	);
};

export default Projects;
