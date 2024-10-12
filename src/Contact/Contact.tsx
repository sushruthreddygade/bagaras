import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import contactUsImg from "../Assets/images/contact-us.png";
import bagarasLogo from "../Assets/images/bagaras.jpeg";
export default function Contact() {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Card sx={{marginBottom: '2em'}}> 
        <div style={{ position: "relative", background: "black" }}>
          <CardMedia
            style={{
              height: "250px",
              opacity: 0.5,
              objectFit: "cover",
              background: "rgba(0, 0, 0, 0.5)",
            }}
            component="img"
            image={bagarasLogo}
            title="order-now"
            alt="ordernow"
          />
          <Typography
            variant="h2"
            sx={{
              position: "absolute",
              color: "white",
              top: "2em",
              left: "50%",
              fontWeight: "bold",
              fontFamily: "Sansita Swashed",
              transform: "translateX(-50%)",
            }}
          >
            ContactUs
          </Typography>
        </div>
      </Card>
      {matches ? (
        <>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              justifyContent: "top",
              alignItems: "top",
              minHeight: "50vh",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Card
                sx={{
                  display: "flex",
                  color: "#20141e",
                }}
              >
                <CardContent>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <LocationOnIcon
                      sx={{ marginRight: "8px" }}
                    ></LocationOnIcon>
                    <Typography variant="h5"> Locate Us</Typography>
                  </div>
                  <Divider />
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6342.42621390708!2d-122.02603849999998!3d37.3611341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb670b182dce1%3A0xe5beb593c8285a97!2s594%20E%20El%20Camino%20Real%2C%20Sunnyvale%2C%20CA%2094087!5e0!3m2!1sen!2sus!4v1728144817724!5m2!1sen!2sus"
                    width="400"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </CardContent>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  color: "#20141e",
                }}
              >
                <CardContent>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <AccessTimeIcon
                      sx={{ marginRight: "8px" }}
                    ></AccessTimeIcon>
                    <Typography variant="h5"> Hours Of Operation</Typography>
                  </div>

                  <Divider />
                  <Stack
                    direction="column"
                    spacing={1}
                    sx={{ marginTop: "2em" }}
                  >
                    <Typography variant="body2">
                      Saturday: 11:30am–2:30pm, 5:30–9:30pm
                    </Typography>
                    <Typography variant="body2">
                      Sunday: 11:30am–2:30pm, 5:30–9:30pm
                    </Typography>
                    <Typography variant="body2">Monday: Closed</Typography>
                    <Typography variant="body2">
                      Tuesday: 5:30–9:30pm
                    </Typography>
                    <Typography variant="body2">
                      Wednesday: 5:30–9:30pm
                    </Typography>
                    <Typography variant="body2">
                      Thursday: 5:30–9:30pm
                    </Typography>
                    <Typography variant="body2">
                      Friday: 11:30am–2:30pm, 5:30–9:30pm
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Container>
        </>
      ) : (
        <>
          <Container
            maxWidth="xs"
            sx={{
              display: "flex",
              justifyContent: "top",
              alignItems: "top",
              marginTop: "5em",
            }}
          >
            <Stack direction="column" spacing={2}>
              <Card
                sx={{
                  display: "flex",
                  color: "#20141e",
                }}
              >
                <CardContent>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <LocationOnIcon
                      sx={{ marginRight: "8px" }}
                    ></LocationOnIcon>
                    <Typography variant="h5"> Locate Us</Typography>
                  </div>
                  <Divider />
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6342.42621390708!2d-122.02603849999998!3d37.3611341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb670b182dce1%3A0xe5beb593c8285a97!2s594%20E%20El%20Camino%20Real%2C%20Sunnyvale%2C%20CA%2094087!5e0!3m2!1sen!2sus!4v1728144817724!5m2!1sen!2sus"
                    width="350"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </CardContent>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  color: "#20141e",
                }}
              >
                <CardContent>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <AccessTimeIcon
                      sx={{ marginRight: "8px" }}
                    ></AccessTimeIcon>
                    <Typography variant="h5"> Hours Of Operation</Typography>
                  </div>

                  <Divider />
                  <Stack
                    direction="column"
                    spacing={1}
                    sx={{ marginTop: "2em" }}
                  >
                    <Typography variant="body2">
                      Saturday: 11:30am–2:30pm, 5:30–9:30pm
                    </Typography>
                    <Typography variant="body2">
                      Sunday: 11:30am–2:30pm, 5:30–9:30pm
                    </Typography>
                    <Typography variant="body2">Monday: Closed</Typography>
                    <Typography variant="body2">
                      Tuesday: 5:30–9:30pm
                    </Typography>
                    <Typography variant="body2">
                      Wednesday: 5:30–9:30pm
                    </Typography>
                    <Typography variant="body2">
                      Thursday: 5:30–9:30pm
                    </Typography>
                    <Typography variant="body2">
                      Friday: 11:30am–2:30pm, 5:30–9:30pm
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Container>
        </>
      )}
    </>
  );
}
