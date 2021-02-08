import React from 'react';

import Card from './Card/Card';

import './Services.css';

import card_bg_1 from './assets/card-bg-1.jpg';

import card_h_1 from './assets/card-hover-1.png';

const Services = () => {
    return (
        <section className="services">
            <div className="services__inner max-width">
                <h2 className="block__title text--upper">Наши услуги</h2>
                <div className="services__cards">
                    <Card
                        link='#123'
                        title='Кардио-реабилитационный центр'
                        text='Кардиореабилитация представляет собой совокупность восстанавливающих процедур и диагностических методик'
                        img={card_bg_1}
                        shortImg={card_h_1}
                    />
                    <Card
                        link='#123'
                        title='Кардио-реабилитационный центр'
                        text='Кардиореабилитация представляет собой совокупность восстанавливающих процедур и диагностических методик'
                        img={card_bg_1}
                        shortImg={card_h_1}
                    />
                    <Card
                        link='#123'
                        title='Кардио-реабилитационный центр'
                        text='Кардиореабилитация представляет собой совокупность восстанавливающих процедур и диагностических методик'
                        img={card_bg_1}
                        shortImg={card_h_1}
                    />
                    <Card
                        link='#123'
                        title='Кардио-реабилитационный центр'
                        text='Кардиореабилитация представляет собой совокупность восстанавливающих процедур и диагностических методик'
                        img={card_bg_1}
                        shortImg={card_h_1}
                    />
                </div>
                <div className="btn--center">
                    <button className="btn">Все услуги</button>
                </div>
            </div>
        </section>
    )
}

export default Services;