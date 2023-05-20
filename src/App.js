import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./Olcha/SignUp";
import {NavBar} from "./nav/navBar";
import Footer from "./nav/Footer";
function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Route path={"/reg"} element={<SignUp/>}/>
            <Route path={"/to'lov"} element={<Tolov/>}/>
            <Route path={"/com"} element={<Sharx/>}/>
            <Route path={"/comen"} element={<Sharx2/>}/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
