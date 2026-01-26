import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ContactCard({ icon, Title, url }) {
  const Icon = icon;
  return (
    <Card
    className="contact-card"
      sx={{
        width: 320,
        background: "#393939",
        borderRadius: 3,
        padding: "1rem",
      }}
    >
      <CardActionArea href={url} target="_blank" sx={{width:"100%",height:"100%"}} >
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
            sx={{ color: "white" }}
          >
            <Icon style={{ fontSize: "2.5rem" }} />
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "white" }}
          >
            {Title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
