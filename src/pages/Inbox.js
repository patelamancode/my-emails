import React, { useContext } from 'react'
import { MailDataContext } from '../context/MailContext'
import { NavLink } from 'react-router-dom';

const Inbox = () => {
  const {mailData, unreadMailCount, setUnreadToRead} = useContext(MailDataContext);
     

  return (
    <div>
      <h1>Inbox</h1>
      <div>
        <h3>Unread Emails : {unreadMailCount}</h3>
        <h3>Read Emails : {mailData.length-unreadMailCount}</h3>
      </div>
      <ul>
        {mailData.map((mail) =>{
          const {id,subject,read} = mail;
          return(
            <li key={id}>
              <NavLink to={`/${id}`}>{subject}</NavLink>
                <span>{!read && <button onClick={()=>setUnreadToRead(id)}>Mark as read</button>}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Inbox
