import React, { useState, useEffect } from 'react';
import AuthContext from './authContext';
import customAxios from '../axios/axios';
import { toast } from 'react-toastify';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check if user is logged in
    useEffect(() => {
        // Implement logic to check if the user is logged in
        // For example, check if the token is stored in localStorage
        let ignore = false;
        const token = localStorage.getItem('token');
        if (token) {
            const getUser = async () => {
                try {
                    const userId = localStorage.getItem('userId');
                    const res = await customAxios(`/user/${userId}`)
                    if(!ignore) setUser(res.data)
                    console.log(user)
                } catch (err) {
                    console.log(err)
                    setUser(false)
                }
            }
            getUser();
        } else {
            setUser(false)
        }

        return () => ignore = true;
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userData.id)
        setUser(userData);
    };

    const authenticateUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
                try {
                    const userId = localStorage.getItem('userId');
                    const res = await customAxios(`/user/${userId}`)
                    setUser(res.data)
                    console.log(user)
                } catch (err) {
                    console.log(err)
                }
            }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(false);
        toast.success('Zostałeś wylogowany!', {
            position: "bottom-center",
        })
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, authenticateUser }}>
            {children}
        </AuthContext.Provider>
    );
};