import {NavLink, Outlet} from 'react-router-dom';

import React from 'react';
import Header from '../header/Header';
import Button from '../button/Button';
import Navbar from '../navbar/Navbar';

const Layout = () => {
    return (
        <>
            <Header>
                <div className="title" style={{ marginLeft:"15px"}}>
                    Сбор данных из различных сервисов АО "НПП "Звезда"
                </div>
                <Button style={{ marginRight:"15px"}}>Войти</Button>
            </Header>
            <Navbar style={{display:"block", alignItems:"center", justifyContent:"space-evenly"}}>
                <div className="links">
                    <NavLink to="/soft_info"className="link">Состояние ПО</NavLink>
                    <NavLink to="/logs_list"className="link">Log-файлы</NavLink>
                </div>
            </Navbar>
            
            <Outlet/>
            
        </>
    );
};

export default Layout;