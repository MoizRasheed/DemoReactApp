import React,{useContext,useEffect} from 'react';
import { Redirect } from "react-router-dom";
import { usercontex } from "./header";

const Logout = () => {
    const {dispatch} = useContext(usercontex)
    useEffect(()=>{
        localStorage.removeItem('login')
        dispatch({type:"user",payload:false})
    },[dispatch])
    return (
        <Redirect to="/login" />
    );
}

export default Logout;
