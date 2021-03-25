import React from 'react';

import './Footer.css';
import logo from './assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper max-width">
                <div className="footer__row">
                    <div className="footer__column">
                        <div className="footer-title">
                            <img src={logo} alt="" className="footer-title__logo" />
                            <p className="footer-title__text text--upper">Tulpar</p>
                        </div>
                    </div>
                    <div className="footer__column">
                        <p className="footer-column__title">Карта сайта</p>
                        <a href="#1" className="footer-column__link">Главная</a>
                        <a href="#1" className="footer-column__link">Наши услуги</a>
                        <a href="#1" className="footer-column__link">Отчеты</a>
                        <a href="#1" className="footer-column__link">О нас</a>
                        <a href="#1" className="footer-column__link">Контакты</a>
                    </div>
                    <div className="footer__column">
                        <p className="footer-column__title">Связаться с нами</p>
                        <a href="#1" className="footer-column__link">+7 700 000 00 00</a>
                        <a href="#1" className="footer-column__link">+7 700 000 00 00</a>
                        <a href="#1" className="footer-column__link">support@test.kz</a>
                        <div className="footer-socials">

                        </div>
                    </div>
                </div>
                <p className="footer__copyrights">
                    © Все права защищены 2019 “Тулпар”
                </p>
            </div>
        </footer>
    );
}

export default Footer;