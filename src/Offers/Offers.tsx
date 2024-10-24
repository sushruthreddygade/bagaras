import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import oderNowImg from "../Assets/images/offer.jpeg";
const Offers = () => {
  return (
    <div>
      <Card sx={{ marginBottom: "2em" }}>
        <div style={{ position: "relative", background: "black" }}>
          <CardMedia
            style={{
              height: "250px",
              paddingTop: "2%",
              opacity: 0.5,
              background: "rgba(0, 0, 0, 0.5)",
            }}
            component="img"
            image={oderNowImg}
            title="order-now"
            alt="Offers"
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
            Offers
          </Typography>
        </div>
      </Card>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="top"
        data-testid="dashboard-loading"
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardContent
            sx={{
              justifyContent: "center",
              alignContent: "center",
              fontStyle: "normal",
              background: "cream",
            }}
          >
            <Typography
              sx={{ textAlign: "center" }}
              gutterBottom
              variant="h5"
              component="div"
              color="#20141e"
            >
              Oct 25 -27, 2024
            </Typography>
          </CardContent>
          <CardContent sx={{ background: "orange" }}>
            <Typography
              variant="h2"
              sx={{
                color: "black",
                textAlign: "center",
                marginTop: "0.5em",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              BUY 1 GET 1 FREE
            </Typography>
          </CardContent>
          <CardContent sx={{ background: "cream" }}>
            <Typography
              variant="body2"
              color="#20141e"
              sx={{ textAlign: "justify" }}
            >
              ** Offer valid only on Masala Mirchi Bajji, Kaju Chicken Pakoda,
              Andhra Chicken Curry with bagara, Telangana mutton curry with
              Bagara, Guthi vankaya curry with bagara, Button Mushroom with
              bagara, Sambar rice, Chicken Sambar Rice on Oct 25 - 27 , 2024.
              Offer is not valid for any other menu items. While supplies last.
              Cannot be combined with any other offers or promotions.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Offers;
