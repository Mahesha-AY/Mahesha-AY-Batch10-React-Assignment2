import { BrowserRouter } from "react-router-dom";
import { routing } from "./routers/routing.js";

function App() {
  return <BrowserRouter>
                
                {routing}
                
          </BrowserRouter>;
}

export default App;