import React, { useState } from 'react';

import calcIcon from '@Assets/images/main/calc-icon.png';
import courierIcon from '@Assets/images/main/courier-icon.png';
import dataIcon from '@Assets/images/main/data-icon.png';
import pactIcon from '@Assets/images/main/pact-icon.png';
import payIcon from '@Assets/images/main/pay-icon.png';

import style from './styles.module.less';
import Tile from '@Components/tile/tile';
import car from '@Assets/images/preview/car.png'
import blank from '@Assets/images/preview/blank.png'
import Carousel from '@Components/carousel/carousel';
import Authorization from '@Components/authorization/Authorization';
import Header from '@Components/header/header';

const sliderList = [{title: 'Срочная доставка день в день',
                text: 'Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений.',
                imgSrc: car},
                {title: 'Подписание договора за 1 час',
                text: 'В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг.',
                imgSrc: blank}];

const Main = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={style.main}>
            {open ? <Authorization closePopup={() => setOpen(false)}/> : null}
            <div className={style.preview}>
                <div className="container">
                    <Header openPopup = {() => setOpen(true)}/>
                    <Carousel obj={sliderList}/>
                </div>
            </div>
        
            <h2>5 шагов к заявке</h2>
            <div className="container">
                <div className={style.wrapper}>
                    <Tile
                        className={style.wrapper__tile}
                        title='Расчетать стоимость'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
                        imgSrc={calcIcon}/>
                    <Tile
                        className={style.wrapper__tile}
                        title='Вызвать курьера'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
                        imgSrc={courierIcon}/>
                    <Tile
                        className={style.wrapper__tile}
                        title='Оплатить услуги'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
                        imgSrc={payIcon}/>
                    <Tile
                        className={style.wrapper__tile}
                        title='Заключить договор'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
                        imgSrc={pactIcon}/>
                    <Tile
                        className={style.wrapper__tile}
                        title='Предоставить данные'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
                        imgSrc={dataIcon}/>
                </div>
            </div>
        </div>
    )
};

export default Main;
