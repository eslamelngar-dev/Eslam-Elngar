"use client";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TheParticles from "@/components/particles/TheParticles";

export default function Hero() {
  return (
    <>
      <section
        id="Home"
        className="relative h-screen overflow-hidden bg-[url('/background.jpg')] bg-cover bg-center"
      >
        <TheParticles />
        {/* Overlay */}
        <div className="overlay absolute inset-0 z-[0] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-4">
          <div className="hero-content mt-15">
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                lineHeight: "1",
                mb: "0.8rem",
                fontSize: {
                  xs: "4rem",
                  sm: "5rem",
                  md: "6rem",
                  lg: "6.5rem",
                },
              }}
            >
              <span
                style={{
                  color: "white",
                }}
              >
                Front End
              </span>
              <span className="nice">Developer</span>
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontFamily: "var(--font-inter)",
                color: "#eee",
                textAlign: "center",
                lineHeight: 1.6,
                maxWidth: { xs: "90%", sm: "80%", md: "52rem" },
                mx: "auto",
                mt: "0",
                mb: "4rem",
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "1.5rem",
                },
              }}
            >
              Crafting clean, responsive web experiences is my passion. Using
              <span className="nice mx-1 font-semibold">React</span> and
              <span className="nice ml-1 font-semibold">JavaScript</span>, I
              transform ideas into dynamic websites and applications.
            </Typography>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-5">
              <Button
                href="#Portfolio"
                size="large"
                className="work-btn"
                variant="contained"
                sx={{
                  background: "var(--niceColor)",
                  borderRadius: "12px",
                  px: { xs: 2, sm: 4, md: 5 },
                  py: { xs: 0.5, sm: 1, md: 1.5 },
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                View My Work
              </Button>

              <Button
                href="#Contact"
                size="large"
                variant="contained"
                className="getin-btn"
                sx={{
                  backgroundColor: "rgb(10, 20, 31)",
                  borderRadius: "12px",
                  px: { xs: 2, sm: 4, md: 5 },
                  py: { xs: 0.5, sm: 1, md: 1.5 },
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center align-center mt-5">
              <IconButton
                size="large"
                className="icon-btn"
                aria-label="GitHub"
                href="https://github.com/eslamelngar-dev"
                target="_blank"
                sx={{
                  color: "#fff",
                }}
              >
                <GitHubIcon fontSize="30px" className="btn-icon" />
              </IconButton>
              <IconButton
                size="large"
                className="icon-btn"
                aria-label="Linkedin"
                href="https://www.linkedin.com/in/eslam-elngar-033611373/"
                target="_blank"
                sx={{
                  color: "#fff",
                }}
              >
                <LinkedInIcon fontSize="30px" className="btn-icon" />
              </IconButton>
              <IconButton
                size="large"
                className="icon-btn"
                aria-label="Email"
                href="mailto:eslamelngar666@gmail.com"
                target="_blank"
                sx={{
                  color: "#fff",
                }}
              >
                <EmailIcon fontSize="30px" className="btn-icon" />
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
