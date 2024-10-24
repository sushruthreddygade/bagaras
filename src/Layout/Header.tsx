import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useColorScheme,
} from "@mui/material";
import bagarasLogo from "../Assets/images/bagaras.jpeg";
import { LocationOn } from "@mui/icons-material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Link from "@mui/material/Link";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import instaImg from "../Assets/images/Instagram_icon.png";
import fbImg from "../Assets/images/fb.png";

const pages: string[] = ["menu", "catering",  "offers", "contact"];
const mobilePages: string[] = [
  "home",
  "menu",
  "catering",
  // "order now",
  "offers",
  "contact",
];

function Header() {
  // eslint-disable-next-line
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  // eslint-disable-next-line
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { mode } = useColorScheme();
  if (!mode) {
    return null;
  }

  return (
    <div style={{ marginBottom: "9em" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#20141e" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters data-testid="app-toolbar">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={bagarasLogo} alt="logo" width={100} height={80} />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                maxWidth: { xs: "100%", md: "50%" },
              }}
            >
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" }, margin: 0 }}
                color="#20141e"
              >
                {mobilePages.map((page) => (
                  <a
                    href={`/${page.trim().replace(" ", "-")}`}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        textDecoration: "none",
                        color: "white",
                        backgroundColor: "#20141e",
                      }}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  </a>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={bagarasLogo} alt="logo" width={160} height={120} />
            </Typography>
            {/* Following code is for the desktop menu items */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#C0C0C0", display: "block" }}
                >
                  <Link
                    href={`/${page.trim().replace(" ", "-")}`}
                    sx={{ color: "#C0C0C0" }}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                position: "relative",
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
                  <Link href="https://www.instagram.com/bagaras_sunnyvale/profilecard/?igsh=MWQ1ZGUxMzBkMA%3D%3D">
                    <img
                      src={instaImg}
                      width={30}
                      height={30}
                      alt="instagram"
                    />
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
                    <img src={fbImg} width={30} height={30} alt="facebook" />
                  </Link>
                </Typography>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
        <Card sx={{ display: "flex", justifyContent: "center", padding: 0 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="https://maps.app.goo.gl/TX71JhDMXHc4dnvC7">
                <LocationOn sx={{ marginRight: "8px" }} />
              </Link>
              <Link href="https://maps.app.goo.gl/TX71JhDMXHc4dnvC7">
                <Typography component="div" variant="subtitle1">
                  Grand Opening on Oct 25, 2024
                </Typography>
              </Link>
            </CardContent>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 0,
            background: "orange",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              }}
            >
              <Typography
                component="div"
                variant="subtitle1"
                sx={{ display: "flex", direction: "row", fontStyle: "normal", fontWeight: 'bold' }}
              >
                <LocalOfferIcon sx={{ marginRight: "8px" }} />
                Buy 1 Get 1 Free* (Oct 25 - 27, 2024)
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </AppBar>
    </div>
  );
}
export default Header;
