import React from 'react';
import style from './style.module.less';
import closeIcon from '@Assets/images/close-icon.png'

const Authorization = (props) => {
    const handleChildElementClick = (e) => {
        e.stopPropagation()
    }
    return (
    <div className={style.auth}>
        <div onClick={props.closePopup} className={style['auth-bg']}>
            <div onClick={(e) => handleChildElementClick(e)} className={style['popup']}>
                <img
                    onClick={props.closePopup}
                    src={closeIcon}
                    alt="закрыть" />
                <div className={style['popup-title']}>
                    Авторизация
                </div>
                <div className={style['popup-text']}>
                    Введите логин и пароль, чтобы войти в личный кабинет
                </div>
                <form>
                    <input 
                        className={style['form-item']}
                        type="text"
                        name="username"
                        maxLength="15"
                        minLength="4"
                        pattern="^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$"
                        id="username"
                        placeholder="Логин"
                        required/>
                    <input
                        className={style['form-item']}
                        type="password"
                        name="password"
                        minLength="6"
                        id="password" 
                        placeholder="Пароль"
                        required/>
                    <button className={style['popup-btn']}>Вход</button>
                </form>
            </div>  
        </div>
    </div>
)};

export default Authorization;