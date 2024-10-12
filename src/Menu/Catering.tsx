import cateringImg from "../Assets/images/catering.jpg";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import {
  veg_appetizers,
  non_veg_appetizers,
  veg_entries,
  non_veg_entries,
  pulavs,
  biryanis,
  rice_noddles,
  breads,
  desserts,
  live_chat_counter,
  tiffins_onsite,
  idli,
  breads_onsite,
  onsite_non_veg_appetizers,
} from "./catering-items";

const Catering = () => {
  const categories = [
    "Veg Appetizers",
    "Non-Veg Appetizers",
    "Veg Entries",
    "Non-Veg Entries",
    "Pulavs",
    "Biryanis",
    "Rice Noodles",
    "Breads",
    "Desserts",
    "Live Chat Counter",
    "Tiffins Onsite",
    "Idli",
    "Breads Onsite",
    "Onsite Non-Veg Appetizers",
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
        <div style={{ position: "relative" , background: "black",}}>
          <CardMedia
            style={{
              height: "250px",
              paddingTop: "2%",
              opacity: 0.5,
              background: "rgba(0, 0, 0, 0.5)",
            }}
            component="img"
            image={cateringImg}
            title="Catering"
            alt="catering"
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
            Catering
          </Typography>
        </div>
      </Card>
      <div>
        <AppBar
          position="relative"
          sx={{ marginBottom: "2em", backgroundColor: "#20141e" }}
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

        <Container>
          <Card
            sx={{
              padding: "1em",
              minHeight: "60vh",
              overflow: "scroll",
            }}
          >
            <CardHeader
              title={selectedCategory}
              titleTypographyProps={{ textAlign: "center" }}
              sx={{ color: "#20141e" }}
            ></CardHeader>
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {selectedCategory === "Veg Appetizers" &&
                  veg_appetizers.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Non-Veg Appetizers" &&
                  non_veg_appetizers.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Veg Entries" &&
                  veg_entries.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Non-Veg Entries" &&
                  non_veg_entries.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Pulavs" &&
                  pulavs.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Biryanis" &&
                  biryanis.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Rice Noodles" &&
                  rice_noddles.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Breads" &&
                  breads.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Desserts" &&
                  desserts.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Live Chat Counter" &&
                  live_chat_counter.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Tiffins Onsite" &&
                  tiffins_onsite.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Idli" &&
                  idli.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Breads Onsite" &&
                  breads_onsite.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                {selectedCategory === "Onsite Non-Veg Appetizers" &&
                  onsite_non_veg_appetizers.map((item: string) => (
                    <Grid key={item} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Typography
                        variant="h6"
                        color="#20141e"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </div>
    </>
  );
};
export default Catering;
