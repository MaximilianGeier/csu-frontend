import React from 'react';
import style from './style.module.less';
import closeIcon from '@Assets/images/close-icon.png'
import Button from '@Components/button/button';

const Authorization = (props) => {
    const handleChildElementClick = (e) => {
        e.stopPropagation()
    }
    return (
    <div className={style.auth}>
        <div onClick={props.closePopup} className={style['auth-bg']}>
            <div onClick={(e) => handleChildElementClick(e)} className={style['auth__popup']}>
                <img
                    onClick={props.closePopup}
                    src={closeIcon}
                    alt="закрыть" />
                <div className={style['auth__popup-title']}>
                    Авторизация
                </div>
                <div className={style['auth__popup-text']}>
                    Введите логин и пароль, чтобы войти в личный кабинет
                </div>
                <form>
                    <input 
                        class={style['form-item']}
                        type="text"
                        name="username"
                        maxlength="15"
                        minlength="4"
                        pattern="^[a-zA-Z0-9_.-]*$"
                        id="username"
                        placeholder="Логин"
                        required/>
                    <input
                        class={style['form-item']}
                        type="password"
                        name="Пароль"
                        minlength="6"
                        id="password" 
                        placeholder="Пароль"
                        required/>
                    <div className={style['auth__popup-btn']}>
                        <Button text='Вход'/>
                    </div>
                </form>
            </div>  
        </div>
    </div>
)};

export default Authorization;