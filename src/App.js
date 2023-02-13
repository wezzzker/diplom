import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Workspace from "./components/Castom_components/Workspase_component/Workspace";
import Header from "./components/UI/header/Header";
import Navbar from "./components/UI/navbar/Navbar";
import A from "./components/UI/a/A";
import POInfo from "./components/Castom_components/POInfo_component/POInfo";
import Button from "./components/UI/button/Button";
import "./styles/App.css";
import Layout from "./components/UI/layout/Layout";


function App() {


  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="soft_info" element={<Workspace/>}/>
          <Route path="logs_list" element={<Workspace/>}/>
        </Route>  
      </Routes>
     {/*<Workspace/>*/}

    </div>
    );
}

export default App;
