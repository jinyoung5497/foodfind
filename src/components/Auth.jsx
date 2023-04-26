import React, { createContext, useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate('')
    const baseUrl = 'https://api.userfront.com'
    const create = '/v0/auth/create'
    const email = useRef('')
    const password = useRef('')
    const confirmPassword = useRef('')
    const [bearerToken, setBearerToken] = useState('')
    

    const getEmail = (event) => {
        email.current = event.target.value
    }
    const getPassword = (event) => {
        password.current = event.target.value
    }
    const getConfirm = (event) => {
        confirmPassword.current = event.target.value
    }

    const register = () => {
        fetch(`${baseUrl}${create}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email.current,
                password: password.current,
                tenantId: "wn9x74xb",
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const login = () => {
        fetch("https://api.userfront.com/v0/auth/basic", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password: password.current,
                emailOrUsername: email.current,
                tenantId: "wn9x74xb",
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBearerToken(data.tokens.access.value)
        })
    }

    return (
        <AuthContext.Provider value={{ register, getEmail, getPassword, getConfirm, login, bearerToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}