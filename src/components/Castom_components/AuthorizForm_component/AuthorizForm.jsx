import React, { useState } from 'react';
import Button from '../../UI/button/Button';
import Input from '../../UI/input/Input';
import classes from "./AuthorizForm.module.css"
const AuthorizForm = ({saveUD, setVizible}) => {

    const [authorizData, setAuthorizData] = useState({login:"", password:""});
    const saveUDate = (e) => {
        e.preventDefault() /*//отмена обновления страницы*/
        const enteredData = { //если нужно добавить отдельное значение, можно создать новую переменную и присвоить ее
            ...authorizData
        }
        if(saveUD(enteredData)){
            setVizible(false)
            setNotice("Введите логин и пароль")
            setAuthorizData({login:"", password:""})
        }
        else{
            setNotice("Ошибка авторизации, попробуйте снова!")
            setAuthorizData({login:"", password:""})
        }
    }

    const [notice, setNotice] = useState("Введите логин и пароль")

    return (
        <form className={classes.AuthorizForm}>
            <Input type="text" required placeholder="Логин" value={authorizData.login} onChange={e =>  setAuthorizData({...authorizData, login: e.target.value})}/>
            <Input type="text" required placeholder="Пароль" value={authorizData.password} onChange={e =>  setAuthorizData({...authorizData, password: e.target.value})}/>
            <p style={{textAlign:"center"}}>{notice}</p>
            <Button onClick={saveUDate}>Войти</Button>
        </form>
    );
};

export default AuthorizForm;