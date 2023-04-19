import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "./DataFromServer";

export const MailDataContext = createContext();

export const MailDataContextProvider = ({children}) =>{

    const [mailData, setMailData] = useState([]);
    const [sentMailData, setSentMailData] = useState([]);
    const[unreadMailCount, setUnreadMailCount] = useState(0);

    const getData = async () =>{
        try{
            const response = await fakeFetch('https://example.com/api/allemails');
            if(response.status === 200){
                setMailData(response.data.emails)
                setSentMailData(response.data.sentEmails)
                setUnreadMailCount(response.data.emails.filter(({read})=> !read).length)
            }
        }
        catch(error){
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getData()
    },[])

  
    const setUnreadToRead = (selectedId) =>{
        const updatedData = mailData.map((item) =>{
            if(item.id === selectedId){
                item.read = !item.read;
            }
            return item
        })
        setMailData(updatedData);
        setUnreadMailCount(unreadMailCount-1)
    } 
    

    

    


 

    return(
        <MailDataContext.Provider value={{mailData,setMailData,  sentMailData, unreadMailCount,setUnreadMailCount, setUnreadToRead }}>
            {children}
        </MailDataContext.Provider>
    )
}
