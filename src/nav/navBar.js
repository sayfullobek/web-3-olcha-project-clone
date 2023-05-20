import "./hover.css"
import {useState} from "react";
import "../Olcha/SignUp"
import {Link} from "react-router-dom";

const lan = localStorage.getItem("lan")
const changeLang = (about) => {
    if (about === "uzb") {
        localStorage.setItem("lan", "uzb")
    } else {
        localStorage.setItem("lan", "eng")
    }
}
export const NavBar = () => {

    const [hidden, setHidden] = useState(false)

    return (
        <div>
            <nav style={{
                height: "90px",
                backgroundColor: "white",
                boxShadow: "0 0 6px 1px",
                width: "100%",
                position: "fixed"
            }}
                 className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to={"#"} style={{marginLeft: "20px", marginTop: "-12px"}}
                          className="navbar-brand text-danger fs-1 fw-bolder" href="#"><img
                        src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="Not"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <button style={{
                        marginTop: "-1px",
                        width: "165px",
                        height: "48px",
                        borderRadius: "14px",
                        marginLeft: "20px",
                        border: "2px solid"
                    }} type="button" className="btn catalog" onClick={() => setHidden(!hidden)}>
                        <p style={{marginTop: "-6px", marginLeft: "7px", display: "flex"}}><i
                            className="bi bi-list fw-bolder fs-3 text-dark"/></p>
                        <p style={{
                            marginTop: "-50px",
                            marginLeft: "40px",
                            fontFamily: "sans-serif",
                            fontSize: "19px"
                        }}>
                            <i className="text-dark">{lan === "uzb" ? "Katalog" : "Catalog"}</i></p>
                    </button>
                    <div className={hidden ? "d-block" : "d-none"}>
                        <div className="modal-dialog modal-fullscreen"
                             style={{width: "100%", height: "502px", marginTop: "85px", position: "absolute"}}>
                            <div className="modal-content">
                                <div>
                                    <form style={{
                                        width: "380px",
                                        height: "480px",
                                        marginTop: "-30px",
                                        marginLeft: "-315px",
                                        overflow: "auto"
                                    }}>

                                        <Link to={"#"} href="#">
                                            <button className="btn btn-light"
                                                    style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                                <Link to={"#"}
                                                      style={{
                                                          marginLeft: "45px",
                                                          textDecoration: "none",
                                                          color: "black"
                                                      }}>Smartfon telefon gadjet
                                                    aksessuarlar</Link>
                                            </button>
                                            <br/></Link>
                                        <Link to={"#"} href="#">
                                            <button className="btn btn-light"
                                                    style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                                <Link to={"#"}
                                                      style={{
                                                          marginLeft: "45px",
                                                          textDecoration: "none",
                                                          color: "black"
                                                      }}>Smartfon telefon gadjet
                                                    aksessuarlar</Link>
                                            </button>
                                            <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link> <Link to={"#"} href="#">
                                        <button className="btn btn-light"
                                                style={{marginLeft: "10px", fontSize: "30pxp", width: "350px"}}>
                                            <Link to={"#"}
                                                  style={{marginLeft: "45px", textDecoration: "none", color: "black"}}>Smartfon
                                                telefon gadjet
                                                aksessuarlar</Link>
                                        </button>
                                        <br/></Link>l
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input style={{
                                borderRadius: "12px",
                                width: "740px",
                                height: "47px",
                                backgroundColor: "#f2f2f2",
                                marginLeft: "25px",
                                marginTop: "20px"
                            }} className="form-control me-1" type="search"

                                   placeholder=" Katalog bo'yicha qidirish"
                                   aria-label="Search"/>
                            <button style={{
                                borderRadius: "12px",
                                width: "72px",
                                marginLeft: "-79px",
                                height: "43px",
                                marginTop: "22px",
                                backgroundColor: "#da002b"
                            }} className="btn btn" type="submit"><i className="bi bi-search text-light  fs-5"/>
                            </button>
                            <Link to={"#"}
                                  style={{
                                      textDecoration: "none",
                                      color: "black",
                                      marginLeft: "30px",
                                      marginTop: "15px"
                                  }}>
                                <i className="bi savat bi-sliders2-vertical fs-4"
                                   style={{marginLeft: "33px"}}/><br/><p
                                style={{marginLeft: "10px", fontSize: "14px"}}
                                className="savat">{lan === "uzb" ? "Taqqoslash" : "Comparison"}</p>
                            </Link>
                            <Link to={"#"} className="savat" style={{
                                marginLeft: "60px",
                                marginTop: "15px",
                                color: "black",
                                textDecoration: "none"
                            }
                            }>
                                <i className="bi bi-heart savat fs-4"/><br/><p
                                style={{fontSize: "14px", marginLeft: "-15px"}}
                                className="savat">{lan === "uzb" ? "Sevimlilar" : "Favorites"}</p>
                            </Link>
                            <Link to={"#"}
                                  style={{
                                      marginLeft: "60px",
                                      textDecoration: "none",
                                      marginTop: "15px",
                                      color: "black"
                                  }}>
                                <i className="bi bi-cart savat fs-4"/><br/><p
                                style={{fontSize: "14px", marginLeft: "-15px"}}
                                className="savat">{lan === "uzb" ? "Savatcha" : "Shop cart"}</p>
                            </Link>

                            <Link href="#"
                                  style={{
                                      marginLeft: "50px",
                                      textDecoration: "none",
                                      marginTop: "9px",
                                      color: "black"
                                  }}>
                                <i className="bi savat bi-person fs-3"/><br/><p
                                style={{fontSize: "14px", marginLeft: "-3px"}}
                                className="savat">{lan === "uzb" ? "Kirish" : "Enter"}</p>
                            </Link>
                            <div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
