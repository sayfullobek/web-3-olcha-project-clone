import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./Olcha/SignUp";
import Tolov from "./Olcha/Tolov";
import Sharx from "./Olcha/Sharx";
import Sharx2 from "./Olcha/Sharx2";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/reg"} element={<SignUp/>}/>
              <Route path={"/to'lov"} element={<Tolov/>}/>
              <Route path={"/com"} element={<Sharx/>}/>
              <Route path={"/comen"} element={<Sharx2/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
