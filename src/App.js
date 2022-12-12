import "./App.css";
import Navbar from "./components/Navbar";
import Uppercase from "./components/Uppercase"
import Home from "./components/Home"
// import Alert from "./components/Alert"
import React,{useState} from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  // const [Alert, setAlert] = useState(null)
  const [Mode,setMode] = useState('light');
  // const [alert,setAlert] = useState(null);

  // const showAlert = (Message, type)=>{
  //   setAlert({
  //     msg: Message,
  //     Type: type
  //   });
  // }



  function toggleMode() {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#00002b';
      // showAlert("Dark mode enabled, success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode enabled, success");
    }
  }
 
  
  return (
    <>
    {/* <Router> */}
    <Navbar mode={Mode} toggleMode={toggleMode}/>
    {/* <Home/>
    <Uppercase/> */}
    
    {/* <Routes>
      <Route path="/home" element={<Home/>}/>  
    </Routes>
    {/* <Uppercase mode={Mode}/> */}
    {/* </Router> */} 
    <Uppercase mode={Mode}/>
    
    {/* <Alert alert={alert}/> */}
    </>
  );
}

export default App;
