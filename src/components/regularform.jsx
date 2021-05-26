import React, { useState } from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormControl } from "@material-ui/core"
import { Input } from "@material-ui/core"
import { InputLabel } from "@material-ui/core"
import { FormHelperText } from "@material-ui/core"
import { RiStackLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
// import Header from "./header";

// const useStyle=makeStyles(theme=>({
//     root:{
//         '& > *':{
//             margin: theme.spacing(1),
//             width: '25ch'
//         }
//     }
// }))
const Regularform = () => {
    const [st,setst]=useState({check1:false,check2:false})
    const [err,seterr]=useState("")
    const fun=(evt)=>{
        console.log(evt.target)
        if(evt.target.value===""){
            seterr("enter email")
        }
        else if(evt.target.value.length<5){
            seterr("add min 6 no")
        }
        else{
            seterr("well")
        }
    }
    // const classes=useStyle()
    return (
        // <form className={classes.root} noValidate autoComplete="off">
        //     <TextField id="standard-basic" label="Standard" />
        //     <TextField id="filled-basic" label="Filled" variant="filled" />
        //     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        // </form>
        <>
        {/* <Header /> */}
        <div>
        <div className="col-12 col-lg-6 d-inline-block">
            <div className="stan">
            <div className="st"><span><RiStackLine /></span>Stack form</div>
            <form noValidate autoComplete="off">
                {/* <TextField label="Email" /> */}
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={true?(evt)=>fun(evt):""}/>
                    <FormHelperText id="my-helper-text">{err}</FormHelperText>
                </FormControl>
                <TextField label="Password" />
                <div>
                    <FormControlLabel control={<Checkbox checked={st.check1} name="check1" onChange={(ev)=>{setst({...st,[ev.target.name]:ev.target.checked})}} color="primary" />} label="Subscribe" />
                </div>
                <Button variant="contained" color="primary">Submit</Button>
            </form>
            </div>
        </div>
        <div className="col-12 col-lg-6 d-inline-block">
        <div className="stan">
        <div className="st"><span><BiDotsHorizontalRounded /></span>Horizontal form</div>
        <div className="col-3 d-inline-block position-relative hor">
            <label className="lb1">Email</label>
            <label className="lb2">Password</label>
        </div>
        <div className="col-9 d-inline-block hoor">
        <form noValidate autoComplete="off">
            <TextField />
            <TextField />
            <div>
                <FormControlLabel control={<Checkbox checked={st.check2} name="check2" onChange={(ev)=>{setst({...st,[ev.target.name]:ev.target.checked})}} color="primary" />} label="Remember" />
            </div>
            <Button variant="contained" color="primary">Submit</Button>
        </form>
        </div>
        </div>
    </div>
        </div>
        </>
    );
};

export default Regularform;