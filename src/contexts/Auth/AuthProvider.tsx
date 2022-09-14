
import axios from 'axios'
import { useEffect, useState } from 'react'
import {AuthContext} from './AuthContext'
import { api } from './../../api';
import { accounts } from '../../types';


export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<accounts | null>(null)
    const token = localStorage.getItem('token')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          }
    }, [token])

    const setToken = (token: string) => {
        localStorage.setItem('token', token)
    }

    const signin = async (username: string, password: string) => {
        const data = await api.Login(username, password);
        

        if(data.status === true) {
            setUser(data.user)
            localStorage.setItem('userLOGGED', data.user.username)
            setToken(data.token)
        
            return true
        } else {
            return false
        }
        
    } 

    const signout = async () => {
        setUser(null)
        localStorage.removeItem('token')
    }

    const request = async (username: string) => {
        let data = await api.AccountREQUEST(username)
        
        if(data) {
            setUser(data.user)
            return true
        }
        return false

    }

    

    return (
        <AuthContext.Provider value={{user, signin, signout, request}}>
            {children}
        </AuthContext.Provider>
    )
}