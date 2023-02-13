import React from "react";
import Workspace from "./components/Castom_components/Workspase_component/Workspace";
import Header from "./components/UI/header/Header";
import Navbar from "./components/UI/navbar/Navbar";
import A from "./components/UI/a/A";
import "./styles/App.css";
import Button from "./components/UI/button/Button";

function App() {


  return (
    <div className="App">
      <Header>
        <div className="title" style={{ marginLeft:"15px"}}>
          Сбор данных из различных сервисов АО "НПП "Звезда"
        </div>
          <Button style={{ marginRight:"15px"}}>Войти</Button>
      </Header>
      <Navbar style={{display:"block", alignItems:"center", justifyContent:"space-evenly"}}>
        <div className="links">
          <A href="/">Состояние ПО</A>
          <A href="/info">Log-файлы</A>
          <A href="/authorization">Вход</A>
        </div>
      </Navbar>
      <Workspace/>
    </div>
    );
}

export default App;
