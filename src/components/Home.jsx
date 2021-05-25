import React, { useEffect, useState } from 'react';
import { ComposableMap,Geographies,Geography } from "react-simple-maps";
// import { ZoomableGroup,ComposableMap,Geographies,Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import Card from "../assets/card";
// import Header from "./header";
import { FaCashRegister } from "react-icons/fa";
import { BiTable,BiCopy,BiError } from "react-icons/bi";
import { CgTimer,CgTwitter } from "react-icons/cg";
import { VscIssues } from "react-icons/vsc";
import { SiPivotaltracker } from "react-icons/si";
import { IoMdGlobe } from "react-icons/io";
import axios from 'axios';
import Chart from "../assets/chart";

const rounded = num => {
    if (num > 1000000000) {
      return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
      return Math.round(num / 100000) / 10 + "M";
    } else {
      return Math.round(num / 100) / 10 + "K";
    }
}
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
const Home = () => {
    const [content,setcontent]=useState("")
    const [adt,setadt]=useState([])
    const [load,setload]=useState(false)
    const usedata= async ()=>{
        try{
            await axios.get("https://reqres.in/api/users?delay=3").then(res=>{
                setadt(res.data.data);
            })
            setload(true)
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        usedata()
        // axios.get("https://reqres.in/api/users?delay=3").then(res=>{
        //     setadt(res.data.data)
        //     console.log(res.data.data)
        // })
        // async function getdata(){
        //     let res=await axios.get("https://reqres.in/api/users?delay=3")
        //     setadt(res.data.data)
        // }
        // getdata()
    },[])
    return (
        <>
        {/* <Header /> */}
        <div className="map">
            <Card ico1={BiCopy} name1="Used Space" rupe="40/25 GB" ico2={BiError} name2="Get more space" background="linear-gradient(60deg , #ffa726 , #fb8c00)" boxshadow="0 4px 20px 0 rgb(0 0 0 / 14%) , 0 7px 10px -5px rgb(255 152 0 / 40%)" />
            <Card ico1={FaCashRegister} name1="Revenue" rupe="$23,456" ico2={BiTable} name2="Last 24 hours" background="linear-gradient(60deg, #66bb6a, #43a047)" boxshadow="0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(76 175 80 / 40%)" />
            <Card ico1={VscIssues} name1="Fixed issues" rupe="75" ico2={SiPivotaltracker} name2="Tracked from Github" background="linear-gradient(60deg, #ef5350, #e53935)" boxshadow="0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(244 67 54 / 40%)" />
            <Card ico1={CgTwitter} name1="Followed" rupe="+234" ico2={CgTimer} name2="Just updated" background="linear-gradient(60deg, #26c6da, #00acc1)" boxshadow="0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 172 193 / 40%)" />
            <div className="garea">
                <div className="gname"><span><IoMdGlobe /></span> Global area</div>
                <div className="tabl d-inline-block pt-3">
                    {load?(
                        <table className="table text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adt.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    ):(
                        <div className="text-center">
                            <div className="spinner-grow text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                    {/* <table className="table text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!load?adt.map(item=>{
                                return(
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                    </tr>
                                )
                            }): <div>
                                    <div className="spinner-grow text-secondary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>}
                            {adt.map(item=>{
                                return(
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table> */}
                </div>
                <div style={{verticalAlign: "top"}} className="tabl d-inline-block pt-3">
                    <ComposableMap data-tip="" projectionConfig={{scale:150}}>
                        {/* <ZoomableGroup> */}
                            <Geographies geography={geoUrl}>
                                {({geographies})=>geographies.map(geo=>(
                                    <Geography key={geo.rsmKey} geography={geo} onMouseEnter={()=>{let {NAME,POP_EST}=geo.properties;setcontent(`${NAME} ${rounded(POP_EST)}`)}} onMouseLeave={()=>{setcontent("")}} />
                                ))}
                            </Geographies>
                        {/* </ZoomableGroup> */}
                    </ComposableMap>
                    <ReactTooltip>{content}</ReactTooltip>
                </div>
            </div>
            <Chart />
        </div>
        </>
    );
};
export default Home;