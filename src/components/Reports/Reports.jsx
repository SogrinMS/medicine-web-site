import React from 'react';
import Card from './Card/Card';
import Tabs from './../Tabs/Tabs.jsx';
import VerticalLines from './../VerticalLines/VerticalLines';
import card_bg_1 from './assets/card-bg-1.jpeg';
import './Reports.css';

const Reports = () => {
    return (
        <section className="reports">
            <div className="reports__wrapper max-width">
                <VerticalLines color="#49647D" />
                <h2 className="block__title text--upper reports__title">Фото и видео отчеты</h2>
                <div className="reports__inner">
                    <Tabs
                        wrapper=''
                        tabs={['показать все', 'только фото', 'только видео']}
                    />
                    <div className="reports__cards">
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                            isVideo={true}
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                            isVideo={true}
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                            isVideo={true}
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                            isVideo={false}
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                            isVideo={true}
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                            isVideo={true}
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                            isVideo={true}
                        />
                        <Card
                            img={card_bg_1}
                            text='Название фото в две строки максимум'
                            isVideo={false}
                        />
                    </div>
                </div>
                <div className="btn--center">
                    <button className="btn reports-btn">Показать все</button>
                </div>
            </div>
        </section>
    );
};

export default Reports;