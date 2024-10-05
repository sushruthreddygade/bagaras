import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardContent,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Facebook, Instagram, LinkedIn, LocationOn } from "@mui/icons-material";
import instaImg from "../Assets/images/Instagram_icon.png";
import fbImg from "../Assets/images/fb.png";
const Footer = () => {
  return (
    <>
      <Container>
        <Card sx={{ display: "flex", justifyContent: "center", flexDirection: 'column' }}>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: "#20141e",
            textAlign: "center",
          }}
        >
          Follow us on
        </Typography>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: "#20141e",
                  textAlign: "center",
                }}
              >
                <Link href="https://www.instagram.com/bagarasca/profilecard/?igsh=NTc4MTIwNjQ2YQ%3D%3D">
                  <img src={instaImg} width={40} height={40} alt="instagram" />
                </Link>
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: "#20141e",
                  textAlign: "center",
                }}
              >
                <Link href="https://www.facebook.com/people/Bagaras/61565510966244/?mibextid=7B2xQ4">
                  <img src={fbImg} width={40} height={40} alt="facebook" />
                </Link>
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Footer;
