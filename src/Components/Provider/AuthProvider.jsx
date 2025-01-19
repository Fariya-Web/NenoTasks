import React, { useContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.init.js' 

const AuthContext = useContext()

const AuthProvider = () => {
 
    const [user, setUser] = useState()
    const [loading, setLoading] = useState()

    const auth = getAuth(app)

    useEffect(()=>{
        
    },[])

    const authInfo = {

    }

    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;