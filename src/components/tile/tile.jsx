import React from 'react';
import style from './tile-style.module.less';

const Tile = (props) => (
    <div className={style.tile}>
        <img src={props.imgSrc} alt="иконка" />
        <div className={style["tile-title"]}>
            {props.title}
        </div>
        <div className={style["tile-text"]}>
            {props.text}
        </div>
    </div>
);

export default Tile;