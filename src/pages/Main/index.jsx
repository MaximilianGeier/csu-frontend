import React, { useState } from 'react';

import calcIcon from '@Assets/images/calc-icon.png';
import courierIcon from '@Assets/images/courier-icon.png';
import dataIcon from '@Assets/images/data-icon.png';
import pactIcon from '@Assets/images/pact-icon.png';
import payIcon from '@Assets/images/pay-icon.png';

import logo from '@Assets/images/logo.svg';

import style from './styles.module.less';
import Header from '@Components/header/header';
import Tile from '@Components/tile/tile';
import Authorization from '@Components/authorization/Authorization';
import Button from '@Components/button/button';

const Main = () => {
    const [open, setOpen] = useState(false);
    return (
    <div className={style.main}>
        {open ? <Authorization closePopup={() => setOpen(false)}/> : null}
        <div className={style.view}>
            <Header
                openPopup = {() => setOpen(true)}/>
            <div className="container">
                <div className={style.slider}>
                    <h1 className={style['slider-title']}>
                        Срочная доставка день в день
                    </h1>
                    <p className={style['slider-text']}>
                        Для тех, кто не может ждать у нас есть услуга срочной курьерской 
                        доставки корреспондеции и других видов отправлений.
                    </p>
                    <div className={style['slider-btn']}>
                        <Button text='Заказать доставку'/>
                    </div>
                </div>
            </div>
        </div>

        <h2>5 шагов к заявке</h2>
        <div className="container">
            <div className={style['wrapper']}>
                <Tile
                    className={style['tile']}
                    title='Расчетать стоимость'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
                    imgSrc={calcIcon}/>
                <Tile
                    className={style['tile']}
                    title='Вызвать курьера'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
                    imgSrc={courierIcon}/>
                <Tile
                    className={style['tile']}
                    title='Оплатить услуги'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
                    imgSrc={payIcon}/>
                <Tile
                    className={style['tile']}
                    title='Заключить договор'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
                    imgSrc={pactIcon}/>
                <Tile
                    className={style['tile']}
                    title='Предоставить данные'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
                    imgSrc={dataIcon}/>
            </div>
        </div>
        <footer className={style['footer']}>
            <div className="container">
                <div className={style.wrapper}>
                    <img src={logo} alt="лого" />
                    <div className={style.footer__column}>
                        <div>
                            <p>О компании</p>
                        </div>
                        <div>
                            <p>Вакансии</p>
                        </div>
                        <div>
                            <p>Клиенту</p>
                        </div>
                        <div>
                            <p>Франчайзинг</p>
                        </div>
                    </div>
                    <div className={style.footer__column}>
                        <div>
                            <p>Доставка из Китая</p>
                        </div>
                        <div>
                            <p>Все услуги</p>
                        </div>
                        <div>
                            <p>Акции</p>
                        </div>
                    </div>
                    <div className={style['footer__column', 'contact']}>
                        <div>
                            <p>manager@uexpress.ru</p>
                        </div>
                        <div>
                            <p>115221, г. Челябинск, ул. <br /> Северная, д. 29-в</p>
                        </div>
                        <div>
                            <p>Мы работаем по 24 часа <br /> 5 дней в неделю</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
)};

export default Main;
