import { Box, Stack, Typography } from "@mui/material";
import loadingImg from "../Assets/images/loading.svg";
const OrderNow = () => {
  return (
    <div style={{ marginTop: "4em" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="top"
        data-testid="dashboard-loading"
      >
        <Stack spacing={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="10vh"
          >
            <Stack spacing={4} direction={{ xs: "row", sm: "row" }}>
              <Typography variant="h5" color="#20141e">
                Site Under Construction
              </Typography>
            </Stack>
          </Box>

          <img src={loadingImg} alt="Site Under Construction" />
        </Stack>
      </Box>
    </div>
  );
};

export default OrderNow;
