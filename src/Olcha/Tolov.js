import React, {Component, useState} from 'react';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const Tolov = () => {
    const [card, setCard] = useState("")
    const [edate, setEdate] = useState("")
    const [pNumber, setPnumber] = useState("")

    const Azim = () => {
        const check = {
            card: card.length !== 16,
            edate: edate.length !== 5,
            pNumber: pNumber.length !== 9,

        }
        if (check.card) {
            return toast.warning("Karta raqamini kiriting")
        }
        if (check.edate){
            return  toast.warning("Amal qilish muddatini kiriting")
        }
        if (check.pNumber){
            return toast.warning("telefon raqamni kiriting")
        }
        localStorage.setItem("card", card)
        localStorage.setItem("edate", edate)
        localStorage.setItem("pNumber", pNumber)
        toast.success("Saqlandi")
        setTimeout(()=>{
        })
        window.location.reload()

    }
    return (
        <div>
            <h3 style={{marginLeft: "450px", marginTop: "20px"}} className={"mt-5"}><b>Identifikatsiya</b></h3>
            <div>
                <div style={{marginLeft: "450px"}}>
                    <div className="card mb-3" style={{maxWidth: "635px", height: "192px", padding: "15px 16px"}}>
                        <div className="row g-0">
                            <div className="col-md-4" style={{height: "160px", width: "177px"}}>
                                <img src="https://ucell.uz/media/images/personaldata/pinfl_uz.jpg"
                                     style={{border: "1px solid grey", height: "160px", width: "177px"}}
                                     className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8" style={{width: "280px"}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{display: "inline-block"}}><b>Pasportning old
                                        tomoni</b></h5>
                                    <Button style={{marginTop: "30px"}}><i className="bi bi-upload"
                                                                           style={{margin: "0px 8px 0px 0px"}}></i>Yuklash</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth: "635px", height: "192px", padding: "10px"}}>
                        <div className="row g-0">
                            <div className="col-md-4" style={{height: "160px", width: "177px"}}>
                                <img src="https://ofb.uz/upload/images/man.jpg"
                                     style={{border: "1px solid grey", height: "160px", width: "177px"}}
                                     className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8" style={{width: "280px"}}>
                                <div className="card-body">
                                    <h5 className="card-title"><b>Pasport bilan selfi</b></h5>
                                    <Button style={{marginTop: "30px"}}><i className="bi bi-upload"
                                                                           style={{margin: "0px 8px 0px 0px"}}></i>Yuklash</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth: "635px", height: "192px", padding: "10px"}}>
                        <div className="row g-0">
                            <div className="col-md-4" style={{height: "160px", width: "177px"}}>
                                <img src="https://www.gazeta.uz/media/img/2020/03/5bo5rj15835971879862_b.jpg"
                                     style={{border: "1px solid grey", height: "160px", width: "177px"}}
                                     className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8" style={{width: "390px"}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{display: "inline-block"}}><b>Pasportingizni
                                        propiska qismi yoki ID kartaning orqa tomoni</b></h5>
                                    <Button style={{marginTop: "30px"}}><i className="bi bi-upload"
                                                                           style={{margin: "0px 8px 0px 0px"}}></i>Yuklash</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span style={{marginLeft: "450px", marginTop: "20px", color: "red"}}>Barcha rasmlarni yuklash shart</span>
            <div className="card" style={{width: "18rem", marginLeft: "1150px", marginTop: "-500px"}}>
                <div className="card-body" style={{width: "470px", height: "240px"}}>
                    <h5 className="card-title">Olcha ballik tizimi</h5>
                    <h5 style={{marginLeft:"217px", marginTop:"30px"}}>0%</h5>
                    <div className="card" style={{border:"1px solid black", maxWidth:"170px", marginTop:"-23px", height:"8px", backgroundColor:"rgb(159, 149, 149)"}}>
                        <Link style={{marginTop:"25px", textDecoration:"none", color:"red"}} to={"#"}>Idintifikatsiya</Link>
                        <Link style={{marginTop:"18px", textDecoration:"none", color:"red"}} to={"#"}>Telefon raqamlari</Link>
                        <Link style={{marginTop:"18px", textDecoration:"none", color:"red"}} to={"#"}>Karta ma'lumotlari</Link>
                    </div>
                </div>
                </div>
            <h3 style={{marginTop: "300px", marginLeft: "470px"}}><b>Telefon raqamlari</b></h3>
            <div style={{marginLeft: "450px", padding:"18px"}}>
                <div className="card mb-3" style={{maxWidth: "644px", height: "257px", padding: "10px", borderRadius:"17px"}}>
                    <div className="col-md-12" style={{marginTop:"20px"}}>
                        <label htmlFor="validationCustomUsername" className="form-label">Telefon raqami</label>

                            <div style={{height: "50px", marginTop:"0px", border:"black"}}><select className="form-select"
                                                                  style={{width: "100%", height: "50px", marginTop:"10px", borderRadius:"5px"}}id="validationCustom04"
                                                                  required>
                                <option value="">+998</option>
                            </select>
                            </div>
                        <div className="input-group has-validation" style={{width: "100%", height: "50px", marginTop:"-50px"}}>
                            <input type="number" style={{marginLeft: "110px",marginBottom:"0px", width: "0px"}} className="form-control"
                                   id="validationCustomUsername"
                                   aria-describedby="inputGroupPrepend" required/>
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12" style={{marginTop:"20px"}}>
                        <label htmlFor="validationCustomUsername" className="form-label">Telefon raqami</label>

                        <div style={{height: "50px", marginTop:"0px"}}>
                            <select className="form-select" style={{width: "100%", height: "50px", marginTop:"10px"}}id="validationCustom04"
                                                                               required>
                            <option value="">+998</option>
                        </select>
                        </div>
                        <div className="input-group has-validation" style={{width: "100%", height: "50px", marginTop:"-50px"}}>
                            <input type="number" style={{marginLeft: "110px",marginBottom:"0px", width: "0px"}} className="form-control"
                                   id="validationCustomUsername"
                                   aria-describedby="inputGroupPrepend" required/>
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-4" style={{height: "160px", width: "177px"}}>
                            <div className="col-md-8" style={{width: "390px"}}>
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 style={{marginTop:"60px"}}>Karta ma'lumotlari</h3>
                <div className="card mb-3" style={{maxWidth: "644px", height: "421px", padding: "12px", borderRadius:"17px"}}>
                    <div className="col-md-7" style={{marginTop:"1px", padding:"18px"}}>
                        <label htmlFor="validationCustom03" className="form-label">Karta raqami</label>
                        <input type="number" className="form-control" id="validationCustom03" style={{height:"50px", borderRadius:"5px", border:"2px solid black"}} placeholder={"0000 0000 0000 0000"} value={card} onChange={e=>setCard(e.target.value)} required/>
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                    </div>
                    <div className="col-md-4" style={{marginLeft:"368px", marginTop:"-67px", maxWidth:"300px", height:""}}>
                        <input type="text" className="form-control" id="validationCustom03" style={{height:"50px", borderRadius:"5px", border:"2px solid black"}} placeholder={"00/00"} value={edate} onChange={e=>setEdate(e.target.value)} required/>
                    </div>
                    <div className="col-md-12" style={{marginTop:"20px", padding:"18px"}}>
                            <label htmlFor="validationCustomUsername" className="form-label">Telefon raqami</label>

                            <div style={{height: "50px", marginTop:"0px", border:"black", maxWidth:"100px"}}>
                            <select className="form-select" style={{width: "100%", height: "50px", marginTop:"10px", borderRadius:"5px"}}id="validationCustom04" required>
                                <option value="">+998</option>
                            </select>
                            </div>
                        <div className="input-group has-validation" style={{width: "100%", height: "50px", marginTop:"-50px", border:"2px solid black"}}>
                            <input type="number" style={{marginLeft: "110px",marginBottom:"0px", width: "0px", borderRadius:"0px", right:"15px"}} className="form-control"
                                   id="validationCustomUsername"
                                   aria-describedby="inputGroupPrepend" value={pNumber} onChange={e=>setPnumber(e.target.value)} required/>
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                        <button style={{marginTop:"40px", width:"110px", height:"50px", borderRadius:"14px", backgroundColor:"red", color:"white", border:"none", marginLeft:"450px"}} onClick={Azim}>Saqlash</button>
                    </div>
                    <p>"Saqlash" tugmasi bosish orqali <a style={{textDecoration:"none"}} href={"https://olcha.uz/oz/cabinet/personal-installment"}>ommaviy taklif shartnomasi</a>ga roziman</p>
                </div>
            </div>
        </div>
    );
}

export default Tolov;