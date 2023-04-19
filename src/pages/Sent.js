import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MailDataContext } from '../context/MailContext';



const Sent = () => {
  const {sentMailData} = useContext(MailDataContext)

  return (
    <div>
      <h1>Sent</h1>
      <ul>
        {sentMailData.map((mail) =>{
          const {id,subject} = mail;
          return(
            <li key={id}>
              <NavLink to={`/${id}`}>{subject}</NavLink>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default Sent
