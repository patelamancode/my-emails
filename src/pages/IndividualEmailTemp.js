import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MailDataContext } from '../context/MailContext';

const IndividualEmailTemp = () => {
    const { emailID } = useParams();
    console.log(emailID);

    const { mailData, sentMailData } = useContext(MailDataContext)

    const filterMail = (data) =>{
        return data.find(({id})=> id === +emailID)
    }
    const selectedMail = filterMail([...mailData, ...sentMailData])
    


  return (
    <div>
        <h2>{selectedMail.subject}</h2>
        <p><b>From :</b>{selectedMail.sender}</p>
        <p><b>Message :</b>{selectedMail.message}</p>
    </div>
  )
}

export default IndividualEmailTemp
