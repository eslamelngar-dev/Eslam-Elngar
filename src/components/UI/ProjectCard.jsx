import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeIcon from "@mui/icons-material/Code";

export default function ProjectCard({
  Title,
  Img,
  Subtitle,
  Description,
  Category,
  Techs,
  Visit,
  Code,
}) {
  return (
    <Card className="project-card" sx={{ maxWidth: 345, background: "#111f2c", borderRadius: 4 }}>
      <CardMedia className="project-img" component="img" alt={Title} height="140" image={Img} />
      <CardContent sx={{ p: 3 }}>
        <div
          style={{ display: "flex", alignItems: "center", justifyContent:"space-between", flexDirection: "row" }}
        >
          <Typography
          className="project-title"
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "white" }}
          >
            {Title}
          </Typography>
          <Chip label={Category} sx={{ color: "white" }} />
        </div>
        <div>
          <Typography variant="body2" sx={{ color: "grey" }}>
            {Subtitle}
          </Typography>
          <Typography variant="body2" sx={{ color: "white", my: 1.5 }}>
            {Description}
          </Typography>
        </div>
        <div>
          {Techs.map((tech, index) => (
            <Chip key={index} label={tech} sx={{ color: "var(--niceColor)" }} />
          ))}
        </div>
        <CardActions>
          <Button
          href={Visit}
          target="_blank"
          className="project-btn"
            size="medium"
            sx={{
              background: "#1c2e40",
              color: "white",
              pr: 2,
              borderRadius: 3,
            }}
          >
            <OpenInNewIcon sx={{ mx: 1 }} />
            Visit
          </Button>
          <Button
          href={Code}
          target="_blank"
          className="project-btn"
            size="medium"
            sx={{
              background: "#1c2e40",
              color: "white",
              pr: 2,
              borderRadius: 3,
            }}
          >
            <CodeIcon sx={{ mx: 1 }} />
            Code
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
