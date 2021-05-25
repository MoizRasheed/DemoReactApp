// import axios from 'axios';
import React,{useContext} from 'react';
import { useHistory } from 'react-router';
// import Header from './header';
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { usercontex } from "./header";
// import axios from 'axios';
// import Swal from "sweetalert2";

const Login = () => {
    const {dispatch} = useContext(usercontex)
    const logis=useHistory()
    // console.log(logis)
    // if(localStorage.getItem('login')){
    //     logis.goBack()
    // }
    // console.log(logis)
    // const log={
    //     email:"",
    //     password:""
    // }
    const log={
        name:"",
        password:""
    }
    const logi=async (e)=>{
        e.preventDefault()
        document.getElementById('res').reset()
        // live api
        // fetch('https://tasks-manag.herokuapp.com/user/login',{
        //     method:"Post",
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(log)
        // }).then(res=>{
        //     if(!res.ok){
        //         throw Error('User not exist')
        //     }
        //     return res.json()
        // }).then(resp=>{
        //     dispatch({type:"user",payload:true})
        //     localStorage.setItem("token",resp.user.token)
        //     logis.push('/')
        // }).catch(err=>{
        //     Swal.fire(err.message)
        // })
        // live api

        // const res=await fetch('https://tasks-manag.herokuapp.com/user/login',{
            // method:"Post",
            // headers:{
            //     'Content-Type':'application/json'
            // },
            // body:JSON.stringify(log)
        // })
        // if(res.status===400){
            // Swal.fire('User not Exist')
        // }
        // const logindata=res.json()
        // console.log(logindata)
        // if(res.status===400 || !logindata){
        //     Swal.fire('User not Exist')
        // }
        // else{
            // dispatch({type:"user",payload:true})
            // localStorage.setItem("token",res.data.user.token)
            // logis.push('/')
        // }
        // axios.post('https://tasks-manag.herokuapp.com/user/login',log).then((res)=>{
        //     if(res.status===200){
        //         dispatch({type:"user",payload:true})
        //         localStorage.setItem("token",res.data.user.token)
        //         logis.push('/')
        //     }
        // })
        fetch(`http://localhost:8000/login?q=${log.name}`).then(res=>{
            res.json().then(reso=>{
                // console.log(reso)
                // console.log(reso.length)
                if(reso.length>0){
                    dispatch({type:"user",payload:true})
                    localStorage.setItem("login",JSON.stringify(reso))
                    logis.push('/')
                }
                else{
                    alert("please check username or password")
                }
            })
        })
        // console.log("localstorage",localStorage.getItem('login'))
        // axios.get(`http://localhost:8000/login?q=${log.name}`).then(res=>{
        //     localStorage.setItem("login",JSON.stringify(res.data))
        //     console.log(res)
        //     console.log(localStorage.getItem('login'))
        // })
        // if(localStorage.getItem('login')){
        //     logis.push('/') 
        // }
        // logis.push('/')
        // console.log(localStorage.getItem('login'))
        // if(localStorage.getItem('login')){
        //     logis.push('/')
        // }
    }
    return (
        <>
        {/* <Header /> */}
        {/* {localStorage.getItem('login')?logis.goBack():<div className="logform">
        <form id="res" onSubmit={(e)=>{logi(e)}}>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input type="text" onChange={(e)=>{log.name=e.target.value}} required />
                <FormHelperText>iouio</FormHelperText>
            </FormControl><br />
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input type="password" onChange={(e)=>{log.password=e.target.value}} required />
                <FormHelperText>iouio</FormHelperText>
            </FormControl><br />
            <Button variant="contained" color="primary" type="submit" >Button</Button>
        </form>
        </div>} */}
        <div className="logform">
        <form id="res" onSubmit={(e)=>{logi(e)}}>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input type="text" onChange={(e)=>{log.name=e.target.value}} required />
                <FormHelperText>iouio</FormHelperText>
            </FormControl><br />
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input type="password" onChange={(e)=>{log.password=e.target.value}} required />
                <FormHelperText>iouio</FormHelperText>
            </FormControl><br />
            <Button variant="contained" color="primary" type="submit" >Button</Button>
        </form>
        </div>
        </>
    );
}

export default Login;
