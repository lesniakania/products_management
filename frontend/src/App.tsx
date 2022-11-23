import "./App.css";
import { Products } from "./features/products/Products";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Products />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
