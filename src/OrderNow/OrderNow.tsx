import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import oderNowImg from "../Assets/images/order_now.jpeg";
const OrderNow = () => {
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
            OrderNow
          </Typography>
        </div>
      </Card>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="top"
        data-testid="dashboard-loading"
      >
        <Stack spacing={4} direction={"column"}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="50vh"
          >
            <Stack spacing={4} direction={{ xs: "row", sm: "row" }}>
              <Typography variant="h5" color="#20141e">
                Site Under Construction
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default OrderNow;
