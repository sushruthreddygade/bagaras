import {
  AppBar,
  Box,
  Card,
  CardMedia,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  veg_appetizers,
  thali,
  non_veg_appetizers,
  bagaras,
  biryanis,
  speciality_rice,
  breafast_items,
  desserts,
  drinks,
  friday_special,
  saturday_special,
  sunday_special,
} from "./menu-items";
import { MenuItem } from "./types";
import menuImg from "../Assets/images/menu.jpeg";
const Menu = () => {
  const categories = [
    "Veg Appetizers",
    "Non-Veg Appetizers",
    "Bagaras",
    "Biryanis",
    "Speciality Rice",
    "Breakfast Items",
    "Desserts",
    "Drinks",
    "Thali",
    "Friday Special",
    "Saturday Special",
    "Sunday Special",
  ];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Veg Appetizers"
  );
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Card>
        <div style={{ position: "relative", background: "black" }}>
          <CardMedia
            style={{
              height: "250px",
              paddingTop: "2%",
              opacity: 0.5,
              background: "rgba(0, 0, 0, 0.5)",
            }}
            component="img"
            image={menuImg}
            title="menu"
            alt="menu"
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
            Menu
          </Typography>
        </div>
      </Card>
      <div>
        <AppBar
          position="relative"
          sx={{ marginBottom: "2em" }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, margin: 2 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                clickable
                color={selectedCategory === category ? "warning" : "secondary"}
                sx={{ padding: "1em", fontWeight: "bold" }}
                onClick={() => handleCategoryClick(category)}
              />
            ))}
          </Box>
        </AppBar>
      </div>
      <Container>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "1em",
            minHeight: "60vh",
            overflow: "scroll",
          }}
        >
          <Stack spacing={3}>
            <Box
              sx={{ position: "relative" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="10vh"
            >
              <Stack spacing={3} direction={{ xs: "column", sm: "column" }}>
                <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                  {selectedCategory}
                </Typography>
                <Divider />
                {selectedCategory === "Veg Appetizers" &&
                  veg_appetizers.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6" color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Non-Veg Appetizers" &&
                  non_veg_appetizers.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}}  color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Bagaras" &&
                  bagaras.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Biryanis" &&
                  biryanis.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Speciality Rice" &&
                  speciality_rice.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Thali" &&
                  thali.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Breakfast Items" &&
                  breafast_items.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Desserts" &&
                  desserts.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Drinks" &&
                  drinks.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Friday Special" &&
                  friday_special.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Saturday Special" &&
                  saturday_special.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
                {selectedCategory === "Sunday Special" &&
                  sunday_special.map((item: MenuItem) => (
                    <Stack
                      key={item.name}
                      spacing={3}
                      direction={{ xs: "row", sm: "row" }}
                      sx={{ justifyContent: "space-between", margin: "1em" }}
                    >
                      <Typography variant="h6"  color="#20141e">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" sx={{ minWidth: '4em'}} color="#20141e">
                        $ {item.price}
                      </Typography>
                    </Stack>
                  ))}
              </Stack>
            </Box>
          </Stack>
        </Card>
      </Container>
    </>
  );
};
export default Menu;
