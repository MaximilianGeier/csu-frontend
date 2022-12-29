import React from 'react';
import style from './style.module.less';
import logo from '@Assets/images/logo.svg';

const Footer = (props) => (
    <footer className={style['footer']}>
        <div className={'container' + ' ' + style['footer__container'] }>
            <div className={style['footer__logo']}>
                <img src={logo} alt="лого" />
            </div>
            <div className={style['wrapper']}>
                <div className={style.footer__column}>
                    <div>
                        <a href='#'>О компании</a>
                    </div>
                    <div>
                        <a href='#'>Вакансии</a>
                    </div>
                    <div>
                        <a href='#'>Клиенту</a>
                    </div>
                    <div>
                        <a href='#'>Франчайзинг</a>
                    </div>
                </div>
                <div className={style.footer__column}>
                    <div>
                        <a href='#'>Доставка из Китая</a>
                    </div>
                    <div>
                        <a href='#'>Все услуги</a>
                    </div>
                    <div>
                        <a href='#'>Акции</a>
                    </div>
                </div>
                <div className={style['footer__column', 'footer__column-contact']}>
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
);

export default Footer;