import React from 'react';

import Tabs from './../Tabs/Tabs.jsx';
import Card from './Card/Card.jsx';
import './News.css';

const News = () => {
    return (
        <section className="news">
            <div className="news__wrapper max-width">
                <h2 className="block__title news__title text--dark text--upper">Наши новости и советы</h2>
                <Tabs 
                    wrapper='news__tabs'
                    tabs={['показать все', 'только новости', 'только советы']}
                />
                <div className="news__row">
                    <Card
                        imageLink='12342134'
                        title='Название новости - Заголовок в две строки'
                        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                        link='#'
                    />
                    <Card
                        imageLink='12342134'
                        title='Название новости - Заголовок в две строки'
                        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                        link='#'
                    />
                    <Card
                        imageLink='12342134'
                        title='Название новости - Заголовок в две строки'
                        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                        link='#'
                    />
                    <Card
                        imageLink='12342134'
                        title='Название новости - Заголовок в две строки'
                        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                        link='#'
                    />
                </div>
                <div className="btn--center">
                    <button className="btn news-btn btn--dark">Все новости</button>
                </div>
            </div>
        </section>
    )
}

export default News;