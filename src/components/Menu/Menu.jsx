import React from 'react';
import './Menu.css';
import logo from './assets/logo.svg';
import arrow from './assets/arrow.svg';

function Menu() {
    return (
        <div className="menu max-width">
            <div className="menu__column">
                <img src={logo} className="menu__logo" alt="logo" />
                <p className="menu__title text--upper">Tulpar</p>
            </div>
            <div className="menu__column">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#1" className="menu__link">
                            Главная
                        </a>
                    </li>
                    <li className="menu__item menu-dropdown">
                        <a href="#1" className="menu__link">
                            Наши услуги
                        </a>
                        <ul className="submenu">
                            <li className="submenu__item">
                                <a href="#1" className="submenu__link">
                                    Травма-реабилитационный центр
                                    </a>
                            </li>
                            <li className="submenu__item">
                                <a href="#1" className="submenu__link">
                                    Кардио-реабилитационный центр
                                    </a>
                            </li>
                            <li className="submenu__item">
                                <a href="#1" className="submenu__link">
                                    Травма-реабилитационный центр
                                    </a>
                            </li>
                            <li className="submenu__item">
                                <a href="#1" className="submenu__link">
                                    Кардио-реабилитационный центр
                                    </a>
                            </li>
                        </ul>
                        <img className="menu-dropdown__arrow" src={arrow} alt="arrow" />
                    </li>
                    <li className="menu__item">
                        <a href="#1" className="menu__link">
                            Отчеты
                        </a>
                    </li>
                    <li className="menu__item menu-dropdown">
                        <a href="#1" className="menu__link">
                            О нас
                        </a>
                        <img className="menu-dropdown__arrow" src={arrow} alt="arrow" />
                    </li>
                    <li className="menu__item">
                        <a href="#1" className="menu__link">
                            Новости
                        </a>
                    </li>
                    <li className="menu__item menu-dropdown">
                        <a href="#1" className="menu__link text--upper">
                            Рус
                        </a>
                        <img className="menu-dropdown__arrow" src={arrow} alt="arrow" />
                    </li>
                </ul>
            </div >
        </div >
    );
}

export default Menu;