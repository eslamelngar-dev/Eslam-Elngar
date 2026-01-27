import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function CVCard({ icon, Title, url }) {
  const Icon = icon;
  return (
    <Card
    className="CV-card"
      sx={{
        width: 320,
        background: "rgb(12, 216, 247)",
        borderRadius: 3,
        padding: "1rem",
      }}
    >
      <CardActionArea component="a" href="/Eslam_Elngar_CV.pdf" download sx={{width:"100%",height:"100%"}} >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "rgb(45, 45, 45)" }}
          >
            <Icon className="CV-icon" style={{ fontSize: "2.5rem" }} />
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "rgb(45, 45, 45)" }}
          >
            {Title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
