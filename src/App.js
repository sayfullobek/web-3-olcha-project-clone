import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./Olcha/SignUp";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/reg"} element={<SignUp/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
