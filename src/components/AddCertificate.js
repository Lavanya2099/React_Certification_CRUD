import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './style.css'

function AddCertificate(props) {
    
    const [certificate, setcertificate] = useState({

        certificateName:'',
        certifiedFrom:'',
        yearOfCompletion:''
    })

    
    const[certificateNameError, setcertificateNameError] =useState('')
     const validateName=()=>{
        if(certificate.certificateName){
            let regex =/^[a-zA-Z ]{7,10}$/;
            if(regex.test(certificate.certificateName)){
                setcertificateNameError("");
                return true;
            }
            else{
                setcertificateNameError("Certification Name should have minimum of 7 characters");
            }}
            else{
                setcertificateNameError("Certification Name is Required");
            }
            return false; 
    };
        
    const[certifiedFromError, setcertifiedFromError] =useState('')
     const validatecertifiedFrom=()=>{
        if(certificate.certifiedFrom){
            let regex =/^[a-zA-Z ]{7,10}$/;
            if(regex.test(certificate.certifiedFrom)){
                setcertifiedFromError("");
                return true;
            }
            else{
                setcertifiedFromError("Certification From should have minimum of 7 characters");
            }}
            else{
                setcertifiedFromError("Certification From is Required");
            }
            return false; 
    };
    
    const [yearOfCompletionError, setyearOfCompletionError] = useState("")
    const validateyearOfCompletion = () => {
        if (certificate.yearOfCompletion) {
            let regex = /^(198\d|19[89]\d|20[01]\d|202[0-2])$/;
            if (regex.test(certificate.yearOfCompletion)) {
                setyearOfCompletionError("");
                return true;
            }
            else {
                setyearOfCompletionError("Enter Year between 1980 to 2022");
            }
        }
        else {
            setyearOfCompletionError("Year of Completion is Required");
        }
        return false;
    };
  
    


    let handleClose = () => {
       props.hideShowAddModal()
    }

    let handleChange = (event) => {
       
        setcertificate({
            ...certificate,
            [event.target.name]: event.target.value
        })
    }

    let addCertificate = (event) => {
        validateName();
        validatecertifiedFrom();
        validateyearOfCompletion();

        
  
    if(validateName() && validatecertifiedFrom() && validateyearOfCompletion()){
       props.updateCertificateList(certificate)
      
         setcertificate({
            certificateName:'',
            certifiedFrom:'',
            yearOfCompletion:''
             
        });
     }
    
 };

return (
        <div>
            <Modal show={props.showAddModal} onHide={handleClose} >
              <Modal.Header closeButton>
              <Modal.Title >Add Certification</Modal.Title>
              </Modal.Header>
                <Modal.Body>

         <form>
            <div>
              <label>Certification Name</label>
              <input
                type="text"
                className="form-control"
                name="certificateName"
                value={certificate.certificateName}
                onChange={(event)=>{handleChange(event)}}/>
       
               {certificateNameError&&<div className="some">{certificateNameError}</div>}

            </div>
            <div>
              <label>Certified From</label>
              <input
                type="text"
                className="form-control"
                name="certifiedFrom"
                value={certificate.certifiedFrom}
                onChange={(event)=>{handleChange(event)}}/>
         
               {certifiedFromError&&<div className="some">{certifiedFromError}</div>}
            </div>
            <div>
              <label>Year of Completition</label>
              <input
                type="number"
                className="form-control"
                name="yearOfCompletion"
                value={certificate.yearOfCompletion}
                onChange={(event)=>{handleChange(event)}}/>
              {yearOfCompletionError && <div className='some'>{yearOfCompletionError}</div>}

            </div>
            
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addCertificate}>
            Save Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}

export default AddCertificate
