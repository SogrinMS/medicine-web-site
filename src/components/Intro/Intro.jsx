import React from 'react';
import Menu from '../Menu/Menu';

import './Intro.css'


function Main() {
    return (
        <section className="intro">
            <Menu />
            <div className="intro__row">
                <div className="intro__column intro__column--left">
                    <h1 className="intro__title text--upper">Кардио-реабилитационный центр</h1>
                    <p className="intro__text">Кардиореабилитация представляет собой совокупность восстанавливающих процедур и диагностических методик, направленных на восстановление естественной жизнедеятельности пациентов, которые перенесли операции или имеют заболевания сердечно-сосудистой системы.</p>
                    <ul className="intro__list">
                        <li className="intro__item">Консультативные услуги</li>
                        <li className="intro__item">Функциональная диагностика</li>
                        <li className="intro__item">Анестезиология и реаниматология</li>
                        <li className="intro__item">Общеклинические исследования</li>
                    </ul>
                    <button className="btn">Все услуги</button>
                </div>
                <div className="intro__column intro__column--right">
                    <h1 className="intro__title text--upper text--dark">Травма-реабилитационный центр</h1>
                    <p className="intro__text text--dark">Реабилитация пациентов травматолого-ортопедического профиля включает мероприятия, направленные на устранение последствий травм, ранее проведённых операций, врождённых патологий и т. д.</p>
                    <ul className="intro__list">
                        <li className="intro__item text--dark">Физиотераптические процедуры</li>
                        <li className="intro__item text--dark">Механотерапия</li>
                        <li className="intro__item text--dark">Массаж</li>
                        <li className="intro__item text--dark">Сервисные и административные услуги</li>
                    </ul>
                    <button className="btn btn--dark">Все услуги</button>
                </div>
            </div>
        </section>
    );
}

export default Main;