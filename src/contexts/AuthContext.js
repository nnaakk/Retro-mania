import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../servises/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken)

    const onLoginSubmit = async (data) => {

     const {email, password} = data

     if(data.email === '' || data.password === ''){
        alert("All fields are requered!")
        return
     }
     if(!data.email.includes('@')){
        alert(`Email is not email!`)
        return;
     }

     
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/');
        } catch (error) {
           alert('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { pswRepeat, ...registerData } = values;
        if(registerData.password === ''|| registerData.pswRepeat === '' || registerData.email === ''){
            alert("All fields are requered!")
            return
        }
        if (pswRepeat !== registerData.password) {
            alert(`Passwords missmuch!`)
            return;
        }
        if(!registerData.email.includes("@")){
            alert(`Email is not email!`)
        return;
        }
        try {
            const result = await authService.register(registerData);
            console.log(result);
            setAuth(result);

            navigate('/');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};