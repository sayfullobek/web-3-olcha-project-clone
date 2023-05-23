import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./Olcha/SignUp";
import {NavBar} from "./nav/navBar";
import Footer from "./nav/Footer";
import { Olcha } from "./Olcha/Olcha";
import Buyurtma from "./Olcha/Buyurtma";
import Kuz from "./Olcha/Kuz";
import Manzil from "./Olcha/Manzil";
import Sevimli from "./Olcha/sevimli";
import Bildi from "./Olcha/bildi";
function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Route path={"/reg"} element={<SignUp/>}/>
            <Route path={"/to'lov"} element={<Tolov/>}/>
            <Route path={"/com"} element={<Sharx/>}/>
            <Route path={"/comen"} element={<Sharx2/>}/>
            <Route path="/olcha" element={<Olcha/>}/>
            <Route path="/Buyurtma" element={<Buyurtma/>}/>
            <Route path="/Kuz" element={<Kuz/>}/>
            <Route path="/Manzil" element={<Manzil/>}/>
            <Route path="/sevimli" element={<Sevimli/>}/>
            <Route path="/bildi" element={<Bildi/>}/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
