import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./Home/Home";
import theme from "./Theme";
import Stack from "@mui/material/Stack";
import AboutUs from "./AboutUs/AboutUs";
import OrderNow from "./OrderNow/OrderNow";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <div id="app-wrapper">
      <ThemeProvider theme={theme}>
        <Stack
          sx={{
            display: "flex",
            height: "inherit",
            backgroundColor: "background.paper",
            width: "100vw",
            minHeight: "100vh",
            justifyContent: "space-between",
          }}
          spacing={2}
        >
          <Header />
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order-now" element={<OrderNow />} />
            </Routes>
          </section>
          <Footer />
        </Stack>
      </ThemeProvider>
    </div>
  );
};
export default App;
