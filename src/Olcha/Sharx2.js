import {Link} from "react-router-dom";
import "./Hove.css"

export const Sharx2 = () => {
    return(
        <div style={{marginTop:"180px"}}>
            <button className="qa" style={{border:"none", backgroundColor:"white", marginLeft:"450px"}}><h2 ><Link style={{color:"black", textDecoration:"none"}} to={"/com"}>Mening sharxlarim!</Link></h2></button>
            <button className="qa" style={{border:"none", backgroundColor:"white", marginLeft:"30px"}}><h2>Mening savollarim?</h2></button>
            <div style={{marginTop:"70px"}} className="d-flex align-items-center justify-content-center">
                <img src="https://olcha.uz/_nuxt/empty-img.3a4aef3b.png" className="o1"/>
            </div>
            <h2 style={{marginLeft:"630px",marginTop:"30px"}}>Sizda savollar yo'q</h2>
        </div>
    )
}

export default Sharx2;