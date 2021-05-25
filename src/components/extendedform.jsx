import React, { useEffect, useRef, useState } from 'react';
import { CgCalendarDates } from "react-icons/cg";
import { MdUpdate } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { TextField } from "@material-ui/core"
import { FormControl } from "@material-ui/core"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import { MenuItem } from "@material-ui/core"
import FormHelperText from "@material-ui/core/FormHelperText"
import Input from '@material-ui/core/Input';
import { Chip } from '@material-ui/core';
import { Button } from '@material-ui/core';
import imgs from '../images/user.png'
// import Header from "./header";

const Extendedform = () => {
    const [arr,setarr]=useState([])
    const [pername,setpername]=useState([])
    const [imgur,setimgur]=useState(imgs)
    const fileInput=useRef(null)
    const handleChange = (event) => {
        setpername(event.target.value);
    }
    useEffect(()=>{
        fetch("http://localhost:8000/comments").then(s=>{
            s.json().then(e=>{
                setarr(e)
                // console.log(e)
                // e.map((w,i)=>{
                // return setarr(w)
                // })
            })
        })
    },[])
    // console.log(arr)
    function encodeImageFileAsURL(element){
        var file = element.target.files[0];
        if(file){
            var reader = new FileReader();
        // console.log("alo",reader)
        reader.onloadend = function() {
        //   console.log('RESULT', reader.result)
          setimgur(reader.result)
        }
        reader.readAsDataURL(file);
        }
    }
    return (
        <>
        {/* <Header /> */}
        <div>
            <div className="col-12 col-lg-4 d-inline-block ee">
                <div className="datto">
                    <div><span><CgCalendarDates /></span>Date Picker</div>
                    <form noValidate className="mt-3">
                        <TextField id="date" label="Date" type="date" defaultValue="2017-05-24"/>
                    </form>
                </div>
            </div>
            <div className="col-12 col-lg-4 d-inline-block ee">
                <div className="datto">
                    <div><span><MdUpdate /></span>Time Picker</div>
                    <form noValidate className="mt-3">
                        <TextField id="time" label="Time" type="time" defaultValue="07:30" InputLabelProps={{shrink: true,}} inputProps={{step: 300,}}/>
                    </form>
                </div>
            </div>
            <div className="col-12 col-lg-4 d-inline-block ee">
                <div className="datto">
                    <div><span><IoMdTimer /></span>DateTime Picker</div>
                    <form noValidate className="mt-3">
                        <TextField id="datetime-local" label="Appointment" type="datetime-local" defaultValue="2017-05-24T10:30"/>
                    </form>
                </div>
            </div>
            <div className="ee">
                <div className="dattoo">
                    <div className="fs">
                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Text</FormHelperText>
                    </FormControl>
                    </div>
                    <div className="fs">
                    <FormControl>
                        <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={pername}
                            onChange={handleChange}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                            <div>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </div>
                            )}
                        >
                        {arr.map((name) => (
                            <MenuItem key={name.body} value={name.body}>
                                {name.body}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </div>
                </div>
            </div>
            <div className="ee">
                <div className="dattoo">
                    <img src={imgur} alt="imagee"/>
                    <div>
                        <input style={{display:"none"}} type="file" onChange={(evt)=>encodeImageFileAsURL(evt)} ref={fileInput} />
                        <Button variant="contained" color="primary" onClick={()=>fileInput.current.click()}>Add Image</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Extendedform;