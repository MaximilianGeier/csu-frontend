import React from 'react';
import style from './not-found-style.module.less';

const NotFound = () => (
    <div className={style['not-found']}>
        <p>404</p>
        <div className={style['text']}>
            <p>Вы вышли из безопастной зоны!!!</p>
        </div>
    </div>
);

export default NotFound;