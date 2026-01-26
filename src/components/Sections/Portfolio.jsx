import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Projects } from "@/data/Projects";
import ProjectCard from "../UI/ProjectCard";

export default function Portfolio() {
  return (
    <section
      id="About"
      className="relative min-h-screen py-20 bg-[#0a141f]"
    >
      <div className="text-center mb-10 px-4">
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontWeight: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            lineHeight: 1,
            mb: 2,
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
          }}
        >
          <span className="nice" style={{ color: "white" }}>
            Portfolio
          </span>
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontFamily: "var(--font-inter)",
            color: "#ddd",
            textAlign: "center",
            lineHeight: 1.6,
            maxWidth: { xs: "90%", sm: "80%", md: "60ch" },
            mx: "auto",
            mt: 0,
            mb: 10,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem", lg: "1.4rem" },
          }}
        >
          A collection of projects showcasing my front-end development skills
        </Typography>
      </div>

      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {Projects.map((project) => (
            <Grid
              key={project.Id}
              item
              xs={12}
              sm={6}
              md={3}
              display="flex"
              justifyContent="center"
            >
              <ProjectCard 
              Title={project.Title}
              Subtitle={project.SubTitle}
              Description={project.Description}
              Img={project.Img}
              Category={project.Category}
              Techs={project.Techs}
              Visit={project.Visit}
              Code={project.Code}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
