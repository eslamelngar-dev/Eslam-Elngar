import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Cards from "../UI/Cards";
import SkillCard from "../UI/SkillCard";
import { Advantages } from "@/data/Advantages";
import { Skills } from "@/data/Skills";

export default function About() {
  return (
    <section
      id="About"
      className="relative min-h-screen py-20 bg-[rgb(14,25,38)]"
    >
      <div className="about-content">
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
              About
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
            I am a dedicated front-end developer passionate about building
            interactive, responsive, and user-friendly web applications. I
            specialize in translating creative designs into clean, efficient,
            and scalable code. Continuously learning new technologies to craft
            high-quality digital experiences and stay ahead in the fast-paced
            web development world.
          </Typography>
        </div>

        <Container maxWidth="xlg">
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 800,
              textAlign: "center",
              mb: 5,
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
              color: "var(--niceColor)",
            }}
          >
            Advantages
          </Typography>

          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {Advantages.map((adv) => (
              <Grid item xs={12} sm={6} md={3} key={adv.id} display="flex" justifyContent="center">
                <Cards
                  title={adv.title}
                  description={adv.Description}
                  icon={adv.icon}
                />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 800,
              textAlign: "center",
              mt: 10,
              mb: 5,
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
              color: "var(--niceColor)",
            }}
          >
            Skills I Know
          </Typography>

          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {Skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3} key={skill.id} display="flex" justifyContent="center">
                <SkillCard
                  title={skill.title}
                  icon={skill.icon}
                  type={skill.type}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </section>
  );
}
