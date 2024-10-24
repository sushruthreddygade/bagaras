import Container from "@mui/material/Container";
import { AppBar, Box, CardContent, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: "white" }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography component="div" variant="subtitle1">
                Bagara's © {new Date().getFullYear()} . All rights reserved.
              </Typography>
            </CardContent>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
