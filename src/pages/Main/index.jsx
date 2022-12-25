import React from 'react';

import cat from '@Assets/images/cat.jpg';

import calcIcon from '@Assets/images/calc-icon.png';
import courierIcon from '@Assets/images/courier-icon.png';
import dataIcon from '@Assets/images/data-icon.png';
import pactIcon from '@Assets/images/pact-icon.png';
import payIcon from '@Assets/images/pay-icon.png';

import style from './styles.module.less';
import Header from '@Components/header/header';
import Tile from '@Components/tile/tile';

const Main = () => (
    <div>
        <div className={style.view}>
            <Header/>
        </div>
        <Tile
            title='Расчетать стоимость'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
            imgSrc={calcIcon}/>
        <Tile
            title='Вызвать курьера'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
            imgSrc={courierIcon}/>
        <Tile
            title='Оплатить услуги'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
            imgSrc={payIcon}/>
        <Tile
            title='Заключить договор'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
            imgSrc={pactIcon}/>
        <Tile
            title='Предоставить данные'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.'
            imgSrc={dataIcon}/>
        <img className={style.main_page__cat_img} src={cat} />
    </div>
);

export default Main;
