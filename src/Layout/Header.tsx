import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Card, CardContent, useColorScheme } from "@mui/material";
import bagarasLogo from "../Assets/images/bagaras.jpeg";
import { LocationOn } from "@mui/icons-material";
import Link from "@mui/material/Link";

const pages: string[] = ["about us", "contact"];

function Header() {
  // eslint-disable-next-line
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  // eslint-disable-next-line
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { mode } = useColorScheme();
  if (!mode) {
    return null;
  }

  return (
    <div style={{ marginBottom: "9em" }}>
      <AppBar position="fixed"> 
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
            {/* <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", marginLeft: "2em" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
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
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    href={`/${page.trim().replace(" ", "-")}`}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
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
              <Link onClick={handleCloseNavMenu} href={`/order-now`}>
                <Typography sx={{ textAlign: "center", color: "#C0C0C0" }}>
                  ORDER NOW
                </Typography>
              </Link>
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
                <Typography component="div" variant="subtitle2">
                  Grand Opening on Oct 18, 2024
                </Typography>
              </Link>
            </CardContent>
          </Box>
        </Card>
      </AppBar>
    </div>
  );
}
export default Header;
