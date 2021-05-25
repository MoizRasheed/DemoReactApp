import React from 'react';
// import React, { useEffect } from 'react';
// import { useHistory } from 'react-router';
import { Redirect } from 'react-router';

// const Protect = ({component:Cmp,...rest}) => (
//    <Route {...rest} render={(props)=>localStorage.getItem('token')?(<Cmp {...props}/>):(<Redirect to="/login" />)} />
// )
const Protect=(props)=>{
   let Cmp=props.Cmp
   // const history=useHistory()
   // useEffect(()=>{
   //    if(!localStorage.getItem('token')){
   //       history.push('./login')
   //    }
   // },[])
   return(
      <>
         {!localStorage.getItem('login')?(<Redirect to="/login" />):( <Cmp />)}
      </>
   )
}

export default Protect;
