import React, {Component} from 'react';
import {useState} from  'react'
import {Table, Button} from "reactstrap";
import "./signUp.css"
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
export const SignUp = () => {
        const [modal, setModal] = useState(false);

        const toggle = () => setModal(!modal);

        const [phoneNumber, setPhoneNumber] = useState("")

        const [num, setNum] = useState([]);

        const phoneNumbers = [
            {name: "+998"}
        ]

    const addPhone = () => {
          const check = {
              phoneNumber: phoneNumber.length !== 9,
          }
          if (check.phoneNumber){
              return toast.error("raqam xato")
          }
        const obj = {
             phoneNumber: phoneNumbers+phoneNumber
        }
        num.push(obj)
        setNum(num)
        localStorage.setItem("phoneNumber", phoneNumber)
        toast.success("Qo'shildi")
        window.location.reload()
        window.onbeforeunload = function() {
            localStorage.clear();
        }

    }
       return(
           <div>
               {localStorage.getItem("phoneNumber") === null ? (
                   <>
                       <Button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                           Launch demo modal
                       </Button>
                   </>
               ) : (
                   <>
                       <div className="dropdown">
                           <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                               Kabinet
                           </button>
                           <ul className="dropdown-menu" style={{padding:"10px", width:"270px"}}>
                               <li><Link to={"#"} className="dropdown-item"><i className="bi bi-person fs-4" style={{margin:"0px 8px 0px 0px"}}></i>Shaxsiy kabinet</Link></li>
                               <li><Link to={"/to'lov"} className="dropdown-item"><i className="bi bi-bag-check fs-4"style={{margin:"0px 8px 0px 0px"}}></i>Mening buyurtmalarim</Link></li>
                               <li><Link to={"#"} className="dropdown-item"><i className="bi bi-bell fs-4" style={{margin:"0px 8px 0px 0px"}}></i>Bildirishnomalar</Link></li>
                               <li><Link to={"#"} className="dropdown-item"><i className="bi bi-box-arrow-right fs-4" style={{margin:"0px 8px 0px 0px"}}></i>Chiqish</Link></li>
                           </ul>
                       </div>
                   </>
               )
               }

               <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{marginTop:"130px"}}>
                   <div className="modal-dialog">
                       <div  className="modal-content" style={{padding:"10px"}}>
                           <div style={{height:"400px"}} className="modal-body">
                               <h2 className="d-flex align-items-center justify-content-center">Profilga kiring yoki <br/> profil yarating</h2>
                               <form>
                                   <div>
                                   <div style={{marginTop:"50px"}} className="col d-flex">
                                       <div className="form-control">
                                           <select style={{height:"45px", width:"65px", border:"none"}} className="form-control" id="floatingSelectGrid" onChange={e=>setPhoneNumber(e.target.value)}>
                                               <option value={""} selected disabled>+998</option>
                                           </select>
                                       </div>
                                       <div className="col-5" style={{marginLeft:"-370px" ,marginTop:"2px", border:"none"}}>
                                           <div className="col-md">
                                               <div className="form-control" style={{borderRadius:"0px"}}>
                                                   <input style={{border:"none", height:"42px"}} type="number" className="form-control" id="number"
                                                          placeholder="998887766" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   </div>
                                   <Button style={{marginTop:"50px",height:"50px", width:"390px",marginLeft:"35px"}} className="btn btn-danger" onClick={()=>addPhone()} type={"button"}>Tasdiqlash</Button>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       )
}

export default SignUp;