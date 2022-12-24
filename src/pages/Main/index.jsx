import React from 'react';

import cat from '@Assets/images/cat.jpg';

import './styles.css';
import Header from '@Components/header/header';

const Main = () => (
    <div className="main-page">
        <Header/>
        <h1 className="main-page__title">Главная</h1>
        <img className="main-page__cat-img" src={cat} />
    </div>
);

export default Main;
