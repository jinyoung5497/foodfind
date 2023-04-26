import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Navbar, Register, Login, Detail, Results } from './components'
import { FetchProvider } from './components/Fetch'
import { AuthProvider } from './components/Auth'

export default function App() {
    return (
        <>
            <AuthProvider>
                <FetchProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />}>
                            <Route path='results' index element={<Results />} />
                            <Route path='detail' element={<Detail />} />
                        </Route>
                        <Route path='register' element={<Register />} />
                        <Route path='login' element={<Login />} />
                    </Routes >
                </FetchProvider>
            </AuthProvider>
        </>
    )
}
