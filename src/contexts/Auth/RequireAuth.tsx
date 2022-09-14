
import { useContext, useEffect } from 'react';
import { AuthContext } from "./AuthContext";
import { NotFound } from './../../pages/notfound';
import  axios  from 'axios';



export const RequireAuth = ({children}: {children: JSX.Element}) => {
    const userLogged = localStorage.getItem('userLOGGED')
    const token = localStorage.getItem('token')
    const auth = useContext(AuthContext);

    useEffect(() => {
        let request = async () => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            await auth.request(userLogged as string)
        }
    
        request() 
    }, [])
    

    if(!token) {
        
        return <NotFound />
    }


    return children
}