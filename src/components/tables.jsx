import React,{useEffect,useState} from 'react';
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import {FormControl} from '@material-ui/core'
import {InputLabel} from '@material-ui/core'
import {Input} from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import Swal from "sweetalert2";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
// import withReactContent from "sweetalert2-react-content";
// import Swal from 'sweetalert2';
// import Header from "./header";
// import swal from "@sweetalert/with-react";
// import { Alert } from 'bootstrap';
// import {FormHelperText} from '@material-ui/core'
// const MySwal = withReactContent(Swal)
const Tables = () => {
    const classes = useStyles();
    const [arro, setarro] = useState([])
    const [upd,setupd] = useState("")
    const [update,setupdate] = useState("")
    const [update1,setupdate1] = useState("")
    const [update2,setupdate2] = useState("")
    // const [update3,setupdate3] = useState("")
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    // console.log(update)
    const data={
      id:"",
        body:"",
        postId:"",
        // password:"",
        // age:""
    }
    const updata={
      id:update,
      body:update1,
      postId:update2,
      // age:update3
    }
    // const [arro1,setarro1] = useState({
    //     id: null,
    //     body: null,
    //     postId: null
    // })
    // console.log(updata)
    useEffect(() => {
      // live api
        // axios.get('https://tasks-manag.herokuapp.com/users',{
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${localStorage.getItem("token")}`
        //   }
        // }).then((arr)=>{
        //     setarro(arr.data)
        // }).catch(err=>{
        //   Swal.fire(err.message)
        // })
        // live api
        axios.get('http://localhost:8000/comments').then(arr=>{
          setarro(arr.data)
        })
    },[])
    const poso=(evt)=>{
      evt.preventDefault()
      document.getElementById("myForm").reset()
      // live api
        // axios.post('https://tasks-manag.herokuapp.com/user',data).then(res=>{
        //     axios.get('https://tasks-manag.herokuapp.com/users',{
        //       headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${localStorage.getItem("token")}`
        //       }
        //     }).then((arr)=>{
        //     setarro(arr.data)
        //     })
        // }).catch(err=>{
        //   if(err.message==="Request failed with status code 400"){
        //     Swal.fire("Moiz error")
        //   }
        // })
        // live api
        axios.post('http://localhost:8000/comments',data).then(
          axios.get('http://localhost:8000/comments').then(arr=>{
            setarro(arr.data)
          })
        )
        setOpen(false)
            // console.log(a)
            // console.log(data)
        // console.log(arro1)
    }
    const upo=(evt)=>{
      evt.preventDefault()
      // live api
      // fetch(`https://tasks-manag.herokuapp.com/user/${upd}`,{
      //   method:"Patch",
      //   headers:{
      //     'Content-Type':'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem("token")}`
      //   },
      //   body:JSON.stringify(updata)
      // }).then(res=>{console.log(res)})
      // axios.patch(`https://tasks-manag.herokuapp.com/user/${upd}`,updata,{
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem("token")}`
      //   }
      // }).then(res=>{
      //   axios.get('https://tasks-manag.herokuapp.com/users',{
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${localStorage.getItem("token")}`
      //     }
      //   }).then(arr=>{
      //     setarro(arr.data)
      //   })
      // })
      // live api
      // MySwal.fire({
      //   title: 'Do you want to save the changes?',
      //   showDenyButton: true,
      //   showCancelButton: true,
      //   confirmButtonText: `Save`,
      //   denyButtonText: `Don't save`,
      //   footer: '<div>Why do I have this issue?</div>'
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     Swal.fire('Saved!', '', 'success')
      //   } else if (result.isDenied) {
      //     Swal.fire('Changes are not saved', '', 'info')
      //   }
      // })
      // alert("values updated")
      axios.patch(`http://localhost:8000/comments/${upd}`,updata).then(
        axios.get('http://localhost:8000/comments').then(arr=>{
            setarro(arr.data)
          })
      )
      setupdate("")
      setupdate1("")
      setupdate2("")
      // setupdate3("")
    }
    const deleted=(evt)=>{
      // console.log(evt)
      // fetch(`http://localhost:8000/comments/${evt}`,{method:"DELETE"}).then(res=>{
      //   res.json().then(resp=>{
      //     console.log(resp)
      //   })
      // })
      // live api
      // axios.delete('https://tasks-manag.herokuapp.com/user/'+evt,{
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem("token")}`
      //   }
      // }).then(
      //   axios.get('https://tasks-manag.herokuapp.com/users',{
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${localStorage.getItem("token")}`
      //     }
      //   }).then((arr)=>{
      //       setarro(arr.data)
      //   })
      // ).then(Swal.fire("deleted successfully"))
      // live api
      axios.delete(`http://localhost:8000/comments/${evt}`).then(
        axios.get('http://localhost:8000/comments').then(arr=>{
            setarro(arr.data)
          })
      )
    }
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <form id="myForm" autoComplete="off" onSubmit={(evt)=>poso(evt)}>
      <div className="modal-body">
  <TextField required id="outlined-basic" label="Body" variant="outlined" onChange={(e)=>{data.body=e.target.value}}/>
  <TextField required id="outlined-basic" label="Post ID" variant="outlined" onChange={(e)=>{data.postId=e.target.value}}/>
  <TextField required id="outlined-basic" label="Id" variant="outlined" onChange={(e)=>{data.id=e.target.value}}/>
  {/* <TextField required id="outlined-basic" label="Age" variant="outlined" onChange={(e)=>{data.age=e.target.value}}/> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
      </form>
      </div>
    );
    // console.log(arro)
    return (
        <>
        {/* <Header /> */}
        <div>
        <div><Button color="primary" variant="contained" type="button" onClick={handleOpen}>Add Data</Button></div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
        {/* <div><Button color="primary" variant="contained" data-toggle="modal" data-target="#exampleModal" onClick={handleOpen}>Add Data</Button></div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form id="myForm" autoComplete="off" onSubmit={(evt)=>poso(evt)}>
      <div className="modal-body">
  <TextField required id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>{data.name=e.target.value}}/>
  <TextField required id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>{data.password=e.target.value}}/>
  <TextField required id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{data.email=e.target.value}}/>
  <TextField required id="outlined-basic" label="Age" variant="outlined" onChange={(e)=>{data.age=e.target.value}}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
      </form>
    </div>
  </div>
</div> */}
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>Body</TableCell>
            <TableCell>Post ID</TableCell>
            {/* <TableCell>Password</TableCell> */}
            {/* <TableCell>Age</TableCell> */}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {arro.map((res,ind)=>{
            return(
                <TableRow key={ind}>
                <TableCell>
                {res.id}
              </TableCell>
              <TableCell>
                {res.body}
              </TableCell>
              <TableCell>
                {res.postId}
              </TableCell>
              {/* <TableCell>
                {res.password}
              </TableCell>
              <TableCell>
                {res.age}
              </TableCell> */}
              <TableCell>
              <Tooltip title="Update" placement="top">
                <Button data-toggle="modal" data-target="#myModal" color="primary" variant="contained" onClick={()=>{setupd(res.id);setupdate(res.id);setupdate1(res.body);setupdate2(res.postId)}}>Edit</Button>
              </Tooltip>
              <Tooltip title="Delete" placement="bottom-end">
                <Button color="secondary" variant="contained" onClick={()=>{deleted(res.id)}}>Delete</Button>
              </Tooltip>
              </TableCell>
            </TableRow>
            )
        })}
        </TableBody>
      </Table>
    </TableContainer>
    <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <form onSubmit={(evt)=>{upo(evt)}}>
        <div className="modal-body">
          <FormControl>
            <InputLabel>Id</InputLabel>
            <Input value={update} onChange={(e)=>{setupdate(e.target.value)}} />
          </FormControl>
          <FormControl>
            <InputLabel>Body</InputLabel>
            <Input value={update1} onChange={(e)=>{setupdate1(e.target.value)}} />
          </FormControl>
          <FormControl>
            <InputLabel>PostId</InputLabel>
            <Input value={update2} onChange={(e)=>{setupdate2(e.target.value)}} />
          </FormControl>
          {/* <FormControl>
            <InputLabel>Age</InputLabel>
            <Input value={update3} onChange={(e)=>{setupdate3(e.target.value)}} />
          </FormControl> */}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
        </form>
      </div>
      
    </div>
  </div>
        </div>
        </>
    );
}

export default Tables;
