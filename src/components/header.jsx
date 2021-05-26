import React, { createContext, useReducer, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Home from "./Home";
import Chartap from "./chartapp";
import Regularform from "./regularform";
import Extendedform from "./extendedform";
import Tables from "./tables";
import Map from "./map";
import Login from "./login";
import Logout from "./logut";
import Protect from "./protect";
import { Switch, Route, Redirect } from "react-router-dom";
import { ImHome2, ImStack, ImTable2 } from "react-icons/im";
import { MdRoom, MdWidgets, MdNotifications } from "react-icons/md";
import { BsFillCaretUpFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaUser, FaListUl, FaWpforms } from "react-icons/fa";
import { FiSettings, FiLogIn } from "react-icons/fi"
import { GiSplitCross, GiFlatPlatform } from "react-icons/gi";
import { AiOutlineBarChart, AiOutlineForm } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
import imgo1 from "../images/side-img.jpg";
import imgo2 from "../images/m1.jpg";
import imgo3 from "../images/m2.jpg";
import imgo4 from "../images/m3.jpg";
import imgo5 from "../images/m4.jpg";
import { initialState, reducer } from "../assets/Usereduce";

export const usercontex = createContext()

const Header = () => {
  const hist = useLocation()
  useEffect(() => {
    localStorage.setItem('routing',hist.pathname)
  }, [hist])
  // console.log(hist)
  let htitle = "";
  let boxClass = ["coll"]
  switch (hist.pathname) {
    case "/login":
      htitle="Login"
      // if(localStorage.getItem("login")){
      //   htitle = "";
      // }
      // else{
      //   htitle="Login";
      // }
      break;
    case "/map":
      htitle = "Map";
      break;
    case "/chart":
      htitle = "Chart";
      break;
    case "/tables":
      htitle = "Tables";
      break;
    case "/extended-form":
      htitle = "Extended Form";
      boxClass[1] = "coll1"
      break;
    case "/regular-form":
      htitle = "Regular Form";
      boxClass[1] = "coll1"
      break;
    default:
      htitle = "Dashboard"
  }
  // const {state,dispatch} = useContext(usercontex)
  let [acto, setacto] = useState("act")
  let [std, setstd] = useState("sd1")
  let [respmen, setrespmen] = useState("resp")
  // let [um, ums] = useState(false)
  // let [topname, settopname] = useState("Dashboard")
  let [wi, setwi] = useState("280px")
  let [wi1, setwi1] = useState("inherit")
  let [wii, setwii] = useState("calc(100% - 280px)")
  let [wiii, setwiii] = useState("")
  let [lh, setlh] = useState("24px")
  let [op, setop] = useState("")
  let [disp1, setdisp1] = useState("")
  let [disp2, setdisp2] = useState("none")
  let [disp3, setdisp3] = useState("")
  let [disp4, setdisp4] = useState("none")
  let [disp5, setdisp5] = useState("")
  let [disp6, setdisp6] = useState("none")
  let [ur, setur] = useState(imgo1)
  // let [disp7,setdisp7]=useState("")
  // let [disp8,setdisp8]=useState("none")
  const addclss1 = () => {
    let op = document.getElementById("back-img")
    op.className = "back-img sd1 dadd"
    setdisp5("none")
    setdisp6("block")
  }
  const addclss2 = () => {
    let op = document.getElementById("back-img")
    op.className = "back-img sd1"
    setdisp6("none")
    setdisp5("block")
  }
  // const addclss3=()=>{
  //   document.getElementById("back-img").style.width="90px"
  //   document.getElementById("tt").className="rot ml-2 shro"
  //   document.getElementById("tt1").className="rot shro"
  //   document.getElementById("tt2").className="rot shro"
  //   document.getElementById("tt3").className="rot shro"
  //   document.getElementById("tt4").className="rot shro"
  //   document.getElementById("tt5").style.opacity="0"
  //   document.getElementById("af").style.width="calc(100% - 90px)"
  //   setdisp7("none")
  //   setdisp8("block")
  // }
  // const addclss4=()=>{
  //   document.getElementById("back-img").style.width="280px"
  //   document.getElementById("tt").className="rot ml-2"
  //   document.getElementById("tt1").className="rot"
  //   document.getElementById("tt2").className="rot"
  //   document.getElementById("tt3").className="rot"
  //   document.getElementById("tt4").className="rot"
  //   document.getElementById("tt5").style.opacity="1"
  //   document.getElementById("af").style.width="calc(100% - 280px)"
  //   setdisp8("none")
  //   setdisp7("block")
  // }

  const stylemenu = {
    "width": `${wi}`,
    "backgroundPositionX": `${wi1}`,
    "backgroundImage": `url("${ur}")`
  }
  const styleafter = {
    "width": `${wii}`,
    "float": "right"
  }
  const stylelist = {
    "transform": `${wiii}`,
    "lineHeight": `${lh}`,
    "opacity": `${op}`
  }
  const styledrop = {
    "opacity": `${op}`
  }
  const stylebtn1 = {
    "display": `${disp1}`
  }
  const stylebtn2 = {
    "display": `${disp2}`
  }
  const stylebtn3 = {
    "display": `${disp3}`
  }
  const stylebtn4 = {
    "display": `${disp4}`
  }
  const stylebtn5 = {
    "display": `${disp5}`
  }
  const stylebtn6 = {
    "display": `${disp6}`
  }
  // const stylebtn7={
  //   "display": `${disp7}`
  // }
  // const stylebtn8={
  //   "display": `${disp8}`
  // }
  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log("state value:",state)
  return (
    <>
      <div id="back-img" style={stylemenu} className={`back-img ${std} ${respmen}`}>
        <div className="text-center fono">
          <ImHome2 className="mb-1" />
          <span id="tt" style={stylelist} className="rot ml-2">Creative Demo</span>
          <GiSplitCross className="crosss" onClick={() => { setrespmen("respmen1") }} />
        </div>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName={acto}><ImStack /><span id="tt1" style={stylelist} className="rot">Dashboard</span></NavLink>
          </li>
          <div className={boxClass.join(' ')} data-toggle="collapse" data-target="#map" aria-expanded="false"><AiOutlineForm /><span id="tt2" style={stylelist} className="rot">Form</span><BsFillCaretUpFill id="tt5" style={styledrop} className="arow" /></div>
          <div className="collapse" id="map">
            <li>
              <NavLink exact to="/regular-form" activeClassName={acto}><GiFlatPlatform /><span id="tt3" style={stylelist} className="rot">Regular Form</span></NavLink>
            </li>
            <li>
              <NavLink exact to="/extended-form" activeClassName={acto}><FaWpforms /><span id="tt4" style={stylelist} className="rot">Extended Form</span></NavLink>
            </li>
          </div>
          <li>
            <NavLink exact to="/chart" activeClassName={acto}><AiOutlineBarChart /><span style={stylelist} className="rot">Chart</span></NavLink>
          </li>
          <li>
            <NavLink exact to="/map" activeClassName={acto}><MdRoom /><span style={stylelist} className="rot">Map</span></NavLink>
          </li>
          <li>
            <NavLink exact to="/tables" activeClassName={acto}><ImTable2 /><span style={stylelist} className="rot">Tables</span></NavLink>
          </li>
          {state || localStorage.getItem('login') ? (
            <li>
              <NavLink exact to="/logout" activeClassName={acto}><RiLogoutBoxLine /><span style={stylelist} className="rot">Logout</span></NavLink>
            </li>) : (
            <li>
              <NavLink exact to="/login" activeClassName={acto}><FiLogIn /><span style={stylelist} className="rot">Login</span></NavLink>
            </li>
          )}
        </ul>
      </div>
      <div id="af" style={styleafter} className="afterhead">
        <div className="padddo">
          <button style={stylebtn1} className="head-check nope1" onClick={() => { setwi("90px"); setwi1("center"); setwii("calc(100% - 90px)"); setwiii("translate3d(-20px, 0, 0)"); setlh("0px"); setop("0"); setdisp2("inline-block"); setdisp1("none") }}>
            <BsThreeDotsVertical />
          </button>
          <button style={stylebtn2} className="head-check nope1" onClick={() => { setwi("280px"); setwi1("inherit"); setwii("calc(100% - 280px)"); setwiii("translate3d(0px, 0, 0)"); setlh("24px"); setop("1"); setdisp2("none"); setdisp1("inline-block") }}>
            <FaListUl />
          </button>
          <button className="head-check nope2" onClick={() => { setrespmen("respmen") }}>
            <FaListUl />
          </button>
          <span className="head-name">{htitle}</span>
          <span className="hds">
            <MdWidgets className="icos" />
            <MdNotifications className="icos" />
            <FaUser />
          </span>
        </div>
        <div className="dropdown menu">
          <button style={stylebtn3} className="btn btn-primary shd" type="button" onClick={() => { setdisp3("none"); setdisp4("block") }}><FiSettings /></button>
          <button style={stylebtn4} className="btn btn-primary shd" type="button" onClick={() => { setdisp3("block"); setdisp4("none") }}><FiSettings /></button>
          <ul style={stylebtn4} className="dropdown-menu">
            <li className="fillo">Sidebar Filters
              <div>
                <button type="button" className="btn btn-success mr-1" onClick={() => { setacto("act1") }}></button>
                <button type="button" className="btn btn-danger mr-1" onClick={() => { setacto("act2") }}></button>
                <button type="button" className="btn btn-warning mr-1" onClick={() => { setacto("act3") }}></button>
                <button type="button" className="btn btn-primary mr-1" onClick={() => { setacto("act4") }}></button>
                <button type="button" className="btn btn-dark" onClick={() => { setacto("act5") }}></button>
              </div>
            </li>
            <li className="fillo pt-1">Sidebar Background
              <div>
                <button type="button" className="btn btn-secondary mr-1" onClick={() => { setstd("sd2") }}></button>
                <button type="button" className="btn btn-success mr-1" onClick={() => { setstd("sd3") }}></button>
                <button type="button" className="btn btn-warning" onClick={() => { setstd("sd4") }}></button>
              </div>
            </li>
            <li className="fillo2 pt-1">Sidebar Image
              <div className="flodi">
                <button style={stylebtn6} type="button" className="btnd btnd1" onClick={addclss2}>
                  <div className="handle handle1"></div>
                </button>
                <button style={stylebtn5} type="button" className="btnd btnd2" onClick={addclss1}>
                  <div className="handle handle2"></div>
                </button>
              </div>
            </li>
            <li className="fillo pt-1 imgt">Images
              <div className="mt-2">
                <button onClick={() => { setur(imgo2) }}>
                  <img src={imgo2} alt="imag" />
                </button>
                <button onClick={() => { setur(imgo3) }}>
                  <img src={imgo3} alt="imag" />
                </button>
                <button onClick={() => { setur(imgo4) }}>
                  <img src={imgo4} alt="imag" />
                </button>
                <button onClick={() => { setur(imgo5) }}>
                  <img src={imgo5} alt="imag" />
                </button>
              </div>
            </li>
            {/* <li className="fillo2 pt-1">Sidebar Mini
              <div className="flodi">
                <button style={stylebtn7} type="button" className="btnd btnd1" onClick={addclss3}>
                  <div className="handle handle1"></div>
                </button>
                <button style={stylebtn8} type="button" className="btnd btnd2" onClick={addclss4}>
                  <div className="handle handle2"></div>
                </button>
              </div>
            </li> */}
          </ul>
        </div>
        {/* <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/chart' component={Chartap}/>
          <Route exact path='/regular-form' component={Regularform}/>
          <Route exact path='/extended-form' component={Extendedform}/>
          <Route exact path='/map' component={Map}/>
          <Route exact path='/tables' component={Tables} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
        </Switch> */}
        {/* <Protect exact path='/' component={Home} /> */}
        {/* protrct route method */}
        <usercontex.Provider value={{ state, dispatch }}>
          <Switch>
            <Route exact path='/'>
              <Protect Cmp={Home} />
            </Route>
            <Route exact path='/chart'>
              <Protect Cmp={Chartap} />
            </Route>
            <Route exact path='/regular-form'>
              <Protect Cmp={Regularform} />
            </Route>
            <Route exact path='/extended-form'>
              <Protect Cmp={Extendedform} />
            </Route>
            <Route exact path='/map'>
              <Protect Cmp={Map} />
            </Route>
            <Route exact path='/tables'>
              <Protect Cmp={Tables} />
            </Route>
            <Route exact path='/logout'>
              <Protect Cmp={Logout} />
            </Route>
            <Route exact path='/login'>
              {!localStorage.getItem('login')?<Login />:<Redirect to={localStorage.getItem('routing')} />}
            </Route>
            {/* <Route exact path='/login'>
              {!localStorage.getItem('login')?<Login />:(props)=>{
                props.history.goBack();
                return ;
              }}
            </Route> */}
            <Route exact path='*' component={() => { return "404 error pageo" }} />
          </Switch>
        </usercontex.Provider>
        {/* <usercontex.Provider value={{state,dispatch}}>
        <Switch>
          <Protect exact path='/' component={Home}/>
          <Protect exact path='/chart' component={Chartap}/>
          <Protect exact path='/regular-form' component={Regularform}/>
          <Protect exact path='/extended-form' component={Extendedform}/>
          <Protect exact path='/map' component={Map}/>
          <Protect exact path='/tables' component={Tables} />
          <Protect exact path='/logout' component={Logout} />
          <Route exact path='/login' render={()=>{return<Login />}} />
          <Route path='*' render={()=>{return "404 error page"}} />
        </Switch>
        </usercontex.Provider> */}
        {/* protrct route method */}
        {/* <Route exact path='/' component={Home}/>
          <Route exact path='/chart' component={Chartap}/>
          <Route exact path='/regular-form' component={Regularform}/>
          <Route exact path='/extended-form' component={Extendedform}/>
          <Route exact path='/map' component={Map}/>
          <Route exact path='/tables' component={Tables} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} /> */}
      </div>
    </>
  );
};

export default Header;