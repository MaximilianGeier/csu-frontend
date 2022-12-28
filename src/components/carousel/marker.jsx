import React from 'react';
import style from './marker-style.module.less';

const Marker = ({index, clickHandler, currentSlide}) => {
    let isChecked = index === currentSlide;
    return(
    <div onClick={clickHandler} className={style['marker'] + ' ' + (isChecked ? style['filled'] : '')}>
    </div>
)};

export default Marker;