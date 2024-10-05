import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
  Stack,
} from "@mui/material";
import sfoImg from "../Assets/images/sfo.jpeg";
import freshImg from "../Assets/images/fresh.jpeg";
import hydImg from "../Assets/images/hyd.jpeg";
const AboutUs = () => {
  return (
    <div>
      <>
        <Container sx={{ marginTop: "1em" }}>
          <Stack direction="column" spacing={2}>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    variant="h4"
                    sx={{ color: "#20141e" }}
                  >
                    Freshness & Quality
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      color: "#20141e",
                      textAlign: "justify",
                      fontStyle: "italic",
                      fontSize: "1.2em",
                      marginTop: "2em",
                    }}
                  >
                    We pride ourselves on our vast array of dishes, combining
                    various herbs & spices which create tastes and aromas that
                    are diverse and unusual, from fiery hot to delicately
                    sublime. With mild to hot curries and lightly spiced as well
                    as more about flavours, the menu will appeal to all
                    connoisseurs of this traditional cuisine. All our dishes are
                    made using only the finest ingredients. We use real, fresh,
                    traditional spice, the best vegetables, seafood and the
                    freshest cuts of meat.
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: "50%" }}
                image={freshImg}
                alt="Live from space album cover"
              />
            </Card>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: "50%" }}
                image={hydImg}
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 1 auto" }}>
                  <Typography
                    component="div"
                    variant="h4"
                    sx={{
                      diaply: "flex",
                      textAlign: "center",
                      color: "#20141e",
                    }}
                  >
                    Hyderabadi Heritage
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      color: "#20141e",
                      textAlign: "justify",
                      fontStyle: "italic",
                      marginTop: "2em",
                    }}
                  >
                    Bagaras brings the rich culinary heritage, offers a
                    delightful array of authentic homestyle cooked food. Served
                    fresh and with utmost care, these dishes showcase the
                    vibrant flavors of the region. With a commitment to using
                    100% halal meat, every bite is a testament to the city's
                    authentic and flavorful cuisine.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Stack>
        </Container>
      </>
    </div>
  );
};

export default AboutUs;
