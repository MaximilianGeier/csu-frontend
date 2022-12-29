import Authorization from '@Components/authorization/Authorization';
import Header from '@Components/header/header';
import React, {useState} from 'react';
import style from './not-found-style.module.less';

const NotFound = () => {
    const [open, setOpen] = useState(false);
    return(
    <div className={style['not-found']}>
        {open ? <Authorization closePopup={() => setOpen(false)}/> : null}
        <div className={style['header-bg']}>
            <div className='container'>
                <Header  openPopup = {() => setOpen(true)}/>
            </div>
        </div>
        <div className={style['not-found__text']}>
            <p>404</p>
            <p>Вы вышли из безопастной зоны!!!</p>
        </div>
    </div>
    )
};

export default NotFound;