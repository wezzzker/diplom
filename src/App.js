import React from "react";
import Workspace from "./components/Castom_components/Workspase_component/Workspace";
import Header from "./components/UI/header/Header";
import Navbar from "./components/UI/navbar/Navbar";
import "./styles/App.css"

function App() {


  return (
    <div className="App">
      <Header>Сбор данных из различных сервисов АО "НПП "Звезда"</Header>
      <Navbar/>
      <Workspace/>
    </div>
    );
}

export default App;
