import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContactCard from "../UI/ContactCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import CVCard from "../UI/CVCard";
import ArticleIcon from "@mui/icons-material/Article";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative min-h-screen py-20 bg-[#222222] flex justify-center align-center flex-col"
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
            Let's Connect
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
          Feel free to reach out through any of the platforms below!
        </Typography>
      </div>

      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <ContactCard
              Title="Github"
              icon={GitHubIcon}
              url="https://github.com/eslamelngar-dev"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <ContactCard
              Title="Linkedin"
              icon={LinkedInIcon}
              url="https://www.linkedin.com/in/eslam-elngar-033611373/"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <ContactCard
              Title="Email"
              icon={EmailIcon}
              url="mailto:eslamelngar666@gmail.com"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <ContactCard
              Title="WhatsApp"
              icon={WhatsAppIcon}
              url="https://wa.me/01289040259"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <ContactCard
              Title="Telegram"
              icon={TelegramIcon}
              url="https://t.me/eslam_elngar_dev"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CVCard Title="My CV" icon={ArticleIcon} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
