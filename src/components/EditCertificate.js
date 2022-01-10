import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './style.css'

function EditCertificate(props) {
    const [certificate, setcertificate] = useState({
        certificateName: '',
        certifiedFrom: '',
        yearOfCompletion: ''
    });

    const[certificateNameError, setcertificateNameError] =useState('')
    const validateName=()=>{
       if(certificate.certificateName){
           let regex =/^[a-zA-Z ]{7,10}$/;
           if(regex.test(certificate.certificateName)){
               setcertificateNameError("");
               return true;
           }
           else{
               setcertificateNameError("Certification Name should have minimum of 5 characters");
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
       if (certificate.yearOfCompletion ) {
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
           setyearOfCompletionError("Year of completion is Required");
       }
       return false;
   };
 

   
   useEffect(() => {
    setcertificate({...props.selectedCertificate})
}, [props.selectedCertificate])


let handleChange = (event) => {
        setcertificate({
            ...certificate,
            [event.target.name]:event.target.value
        })
    }
    let handleClose = () => {
       props.hideShowEditModal()
    }

    let editCertificate = (event) => {
        validateName();
        validatecertifiedFrom();
        validateyearOfCompletion();

        
  
    if(validateName() && validatecertifiedFrom() && validateyearOfCompletion()){
        props.updateCertificateAfterEdit(certificate)
        setcertificate({
        certificateName: '',
        certifiedBy: '',
        yearOfCompletion: ''})
            
    }
    
 };

return (
        <div>
         <Modal show={props.showEditModal} onHide={handleClose}>
         <Modal.Header closeButton>
         <Modal.Title >Edit Certification</Modal.Title>
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
          <Button variant="primary" onClick={editCertificate}>
            Save Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}

export default EditCertificate
