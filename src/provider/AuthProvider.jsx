import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import app from '../firebase/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { app } from '../firebase/firebase';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const loginUser = ( email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged User', loggedUser)
            setUser(loggedUser)
            setLoader(false)
        })
        return ()=> {
            unsubscribe()
        }
    },[])


    const authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;