import {BrowserRouter, Routes} from "react-router-dom";
import {NavBar} from "./nav/navBar";
import Footer from "./nav/Footer";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Footer/>
            <Routes>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
