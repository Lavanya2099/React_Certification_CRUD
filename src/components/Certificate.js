import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import AddCertificate from './AddCertificate';
import EditCertificate from './EditCertificate';
import './style.css'

function Certificate() {
    const [certificateList, setCertificateList] = useState([])
    const [selectedCertificate, setSelectedCertificate] = useState({})
    const [selectedCertificateDisplay, setSelectedCertificateDisplay] = useState('')
    const [showAddModal, setshowAddModal] = useState(false);
    const [showEditModal, setshowEditModal] = useState(false);

    let updateShowAddModal = () => {
    setshowAddModal(true)
    }
    let hideShowAddModal = () => {
        setshowAddModal(false);
    };

    let updateCertificateList = (certificate) => {
     let certificateCopy = [...certificateList]
        certificateCopy.push(certificate)
        setCertificateList(certificateCopy)
        alert("Certificate Added Successfully!!")
    }


    let updateCertificateAfterEdit = async (certificate) => {
        let certificateCopy = [...certificateList]
        certificateCopy.splice(selectedCertificateDisplay, 1, certificate)
        setCertificateList(certificateCopy)
        setSelectedCertificateDisplay('')
        setshowEditModal(false)
        alert("Certificate Changes Updated Successfully!!")
    }
    let updateShowEditModal = (certificate, index) => {
        setshowEditModal(true)
     
        setSelectedCertificateDisplay(index)
        setSelectedCertificate(certificate)
    }
    let hideShowEditModal = () => {
        setshowEditModal(false)
    }

    let deleteCertificate = (index) => {
       let certificateCopy = [...certificateList]
       certificateCopy.splice(index, 1)
       setCertificateList(certificateCopy)
        
    }

return (
        <div>
            <Table striped hover>
                <thead className='border-bottom'>
                    <tr>
                        <th >Id</th>
                        <th>Certification Name</th>
                        <th>Certified From</th>
                        <th>Year of Completion</th>
                        <th><button  className="btn btn-primary" onClick={updateShowAddModal}>Add</button></th>
                    </tr>
                </thead>
                <tbody>
                    {certificateList.length > 0 && certificateList.map((Certificate, index) =>
                     {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{Certificate.certificateName}</td>
                            <td>{Certificate.certifiedFrom}</td>
                            <td>{Certificate.yearOfCompletion}</td>
                            <td><button className="btn btn-success" onClick={() => updateShowEditModal(Certificate, index)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteCertificate(index)}>Delete</button></td>
                        </tr>
                    })
                }


         </tbody>
            </Table>

            <AddCertificate showAddModal={showAddModal}
                hideShowAddModal={hideShowAddModal}
                updateCertificateList={updateCertificateList}
            />

            <EditCertificate showEditModal={showEditModal}
                hideShowEditModal={hideShowEditModal}
                updateCertificateAfterEdit={updateCertificateAfterEdit}
                selectedCertificate={selectedCertificate}
            />
        </div>
    )
}

export default Certificate
