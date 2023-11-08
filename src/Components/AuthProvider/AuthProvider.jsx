import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from "../Firebase/firebase";
import axios from "axios";

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
            if(currentUser){
                
                axios.post('https://job-book-server.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log('token response',res.data)
                })
            }
            else{
                axios.post('https://job-book-server.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log('token response',res.data)
                })
            }
        })
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo = {user, loading, createUser, signInUser, signInWithGoogle, logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;