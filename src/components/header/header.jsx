import React from 'react';
import style from './header-style.module.less';

import logo from '@Assets/images/logo.svg';
import phone from '@Assets/images/phone_img.svg';

const Header = (props) => (
    <div>
        <div className="container">
            <header className={style.header}>
                <div className={style.header_left}>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className={style.header_line}></div> 
                    <div className={style.header_text}>
                        <p>Курьерская служба доставки</p>
                    </div>
                </div>
                <div className={style.header_right}>
                    <div className={style.header_phone}>
                        <img src={phone} alt="phone image" />
                        <a href="tel:+79090231251">8 (909) 023-12-51</a>
                    </div>
                    <button onClick={props.openPopup}>Вход</button>
                </div>
            </header>
        </div>
    </div>
);

export default Header;