import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./Home/Home";
import theme from "./Theme";
import Stack from "@mui/material/Stack";
import OrderNow from "./OrderNow/OrderNow";
import Contact from "./Contact/Contact";
import Menu from "./Menu/Menu";
import Catering from "./Menu/Catering";
import Offers from "./Offers/Offers";
import { Fab } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
              <Route path="/home" element={<Home />} />
              {/* <Route path="/about-us" element={<AboutUs />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/order-now" element={<OrderNow />} />
            </Routes>
            <Fab
              variant="extended"
              style={{
                margin: 0,
                top: "auto",
                right: 20,
                bottom: 20,
                left: "auto",
                position: "fixed",
                fontStyle: "normal",
                background: "green",
                color: 'white',
                fontWeight: "bold",
              }}
              href="https://order.tryotter.com/s/bagara's/594-east-el-camino-real-sunnyvale/e7a016c9-c780-4075-8cca-58272d6e7887"
            >
              <ShoppingCartIcon />
              Order Now
            </Fab>
          </section>
          <Footer />
        </Stack>
      </ThemeProvider>
    </div>
  );
};
export default App;
