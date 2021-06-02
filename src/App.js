import Home from "./components/Home";
import Productlist from "./components/ProductList";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#fefafb", // main background color
  pink: "#ffffff",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <Productlist />
    </ThemeProvider>
  );
}

export default App;
