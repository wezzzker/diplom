import React from "react";
import Workspace from "./components/Castom_components/Workspase_component/Workspace";
import Header from "./components/UI/header/Header";
import Navbar from "./components/UI/navbar/Navbar";
import A from "./components/UI/a/A";
import "./styles/App.css";

function App() {


  return (
    <div className="App">
      <Header>
        <div className="title">
        Сбор данных из различных сервисов АО "НПП "Звезда"
        </div>
      </Header>
      <Navbar style={{display:"block", alignItems:"center", justifyContent:"space-evenly"}}>
        <div className="links">
          <A href="/">Home</A>
          
          <A href="/info">Soft Info</A>
          <A href="/authorization">Log in</A>
        </div>
      </Navbar>
      <Workspace/>
    </div>
    );
}

export default App;
