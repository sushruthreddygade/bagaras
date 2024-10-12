import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
  Stack,
} from "@mui/material";
import hydImg from "../Assets/images/hyd.jpeg";
import biryaniImg from "../Assets/images/biryani.jpeg";
import bagaraVideo from "../Assets/videos/bagaras_video.mp4";
import useMediaQuery from "@mui/material/useMediaQuery";
import sfoImg from "../Assets/images/sfo.jpeg";
import freshImg from "../Assets/images/fresh.jpeg";
import halalImg from "../Assets/images/halal.png";

const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div>
      {matches ? (
        <>
          <video
            width="100%"
            height="712"
            controls
            autoPlay={true}
            loop={true}
            muted
            style={{ objectFit: "cover", top: 0, left: 0 }}
          >
            <source src={bagaraVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Container sx={{ marginTop: "1em" }}>
            <Stack direction="column" spacing={2}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "50%" }}
                  image={sfoImg}
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
                      Bay Area Techies & Hyderabadi Chefs
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      sx={{
                        color: "#20141e",
                        textAlign: "justify",
                        fontStyle: "italic",
                        fontSize: "1.2em",
                        marginTop: "2em",
                      }}
                    >
                      We are Hyderabadi's at heart and experienced Bay Area Big
                      Tech software engineers, we aims to provide a unique and
                      authentic dining experience balancing the needs of every
                      customer. Bagaras brings the rich culinary heritage,
                      offers a delightful array of authentic homestyle cooked
                      food. Served fresh and with utmost care, these dishes
                      showcase the vibrant flavors of the region. With a
                      commitment to using 100% halal meat, every bite is a
                      testament to the city's authentic and flavorful cuisine.
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
              <Card sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      component="div"
                      variant="h5"
                      sx={{ color: "#20141e" }}
                    >
                      Mandi & Biryani
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        color: "#20141e",
                        textAlign: "justify",
                        marginTop: "2em",
                      }}
                    >
                      Indulge in the aromatic mandi, a traditional rice dish
                      cooked with tender meat, or explore the diverse culinary
                      experiences that Hyderabad has to offer.
                    </Typography>
                    <img
                      src={halalImg}
                      width="80"
                      height="65"
                      style={{ margin: "1em 1em 4em 10em" }}
                      alt="Live from space album cover"
                    />
                    <Typography
                      component="div"
                      variant="h5"
                      sx={{ color: "#20141e" }}
                    >
                      100 % Halal
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        color: "#20141e",
                        textAlign: "justify",
                        marginTop: "2em",
                      }}
                    >
                      we proudly serve 100% authentic halal meat, sourced from
                      trusted suppliers and prepared according to strict Islamic
                      dietary laws. This ensures that every bite is a testament
                      to our dedication to quality and authenticity. Indulge in
                      the tender, flavorful meat that accompanies our delectable
                      dishes, knowing that your meal is prepared with the utmost
                      care and respect for tradition.
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: "50%" }}
                  image={biryaniImg}
                  alt="Live from space album cover"
                />
              </Card>
              {/* <Card sx={{ display: "flex" }}>
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
                      delightful array of authentic homestyle cooked food.
                      Served fresh and with utmost care, these dishes showcase
                      the vibrant flavors of the region. With a commitment to
                      using 100% halal meat, every bite is a testament to the
                      city's authentic and flavorful cuisine.
                    </Typography>
                  </CardContent>
                </Box>
              </Card> */}
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "50%" }}
                  image={freshImg}
                  alt="Live from space album cover"
                />
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
                      sublime. With mild to hot curries and lightly spiced as
                      well as more about flavours, the menu will appeal to all
                      connoisseurs of this traditional cuisine. All our dishes
                      are made using only the finest ingredients. We use real,
                      fresh, traditional spice, the best vegetables, seafood and
                      the freshest cuts of meat.
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Stack>
          </Container>
        </>
      ) : (
        <>
          <video
            width="100%"
            height="420"
            controls
            autoPlay={true}
            loop={true}
            muted
            playsInline
            id="video"
            style={{ objectFit: "cover", margin: "0 auto" }}
          >
            <source src={bagaraVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Container sx={{ marginTop: "1em" }}>
            <Stack direction="column" spacing={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  sx={{ height: 360 }}
                  image={sfoImg}
                  alt="biryani Image"
                />
                <CardContent>
                  <Typography
                    sx={{ textAlign: "center" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#20141e"
                  >
                    Bay Area Techies & Hyderabadi Chefs
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      color: "#20141e",
                      textAlign: "justify",
                      marginTop: "2em",
                    }}
                  >
                    We are Hyderabadi's at heart and experienced Bay Area Big
                    Tech software engineers, we aims to provide a unique and
                    authentic dining experience balancing the needs of every
                    customer. Bagaras brings the rich culinary heritage, offers
                    a delightful array of authentic homestyle cooked food.
                    Served fresh and with utmost care, these dishes showcase the
                    vibrant flavors of the region. With a commitment to using
                    100% halal meat, every bite is a testament to the city's
                    authentic and flavorful cuisine.
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 360 }}
                  component="img"
                  image={halalImg}
                  alt="Hyderabad Image"
                />
                <CardContent>
                  <Typography component="div" variant="h5" color="#20141e">
                    100 % Halal
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#20141e",
                      textAlign: "justify",
                      marginTop: "2em",
                    }}
                  >
                    we proudly serve 100% authentic halal meat, sourced from
                    trusted suppliers and prepared according to strict Islamic
                    dietary laws. This ensures that every bite is a testament to
                    our dedication to quality and authenticity. Indulge in the
                    tender, flavorful meat that accompanies our delectable
                    dishes, knowing that your meal is prepared with the utmost
                    care and respect for tradition.
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 360 }}
                  component="img"
                  image={biryaniImg}
                  alt="biryani Image"
                />
                <CardContent>
                  <Typography
                    sx={{ textAlign: "center" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#20141e"
                  >
                    Mandi & Biryani
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      color: "#20141e",
                      textAlign: "justify",
                      marginTop: "2em",
                    }}
                  >
                    Indulge in the aromatic mandi, a traditional rice dish
                    cooked with tender meat, or explore the diverse culinary
                    experiences that Hyderabad has to offer.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 360 }}
                  component="img"
                  image={freshImg}
                  alt="Hyderabad Image"
                />
                <CardContent>
                  <Typography
                    sx={{ textAlign: "center" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#20141e"
                  >
                    Freshness & Quality
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      color: "#20141e",
                      textAlign: "justify",
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
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 360 }}
                  component="img"
                  image={hydImg}
                  alt="Hyderabad Image"
                />
                <CardContent
                  sx={{ justifyContent: "center", alignContent: "center" }}
                >
                  <Typography
                    sx={{ textAlign: "center" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#20141e"
                  >
                    Hyderabadi Heritage
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      color: "#20141e",
                      textAlign: "justify",
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
              </Card>
            </Stack>
          </Container>
        </>
      )}
    </div>
  );
};

export default Home;
