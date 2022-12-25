import React from 'react';
import style from './style.module.less';

const Button = (props) => (
    <button className={style.btn}>
        {props.text}
    </button>
);

export default Button;