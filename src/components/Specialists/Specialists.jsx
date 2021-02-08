import React from 'react';
import Card from './Card/Card';

import './Specialists.css';

import spec_1 from './assets/specialist-1.jpeg';

const Specialists = () => {
    return (
        <section className="specialists">
            <div className="specialists__inner max-width">
                <h2 className="block__title text--upper text--dark">
                    Наши специалисты
                </h2>
                <div className="specialists__cards">
                    <Card
                        img={spec_1}
                        title='Доктор Аблай Туркесович'
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
                    />
                    <Card
                        img={spec_1}
                        title='Доктор Аблай Туркесович'
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
                    />
                    <Card
                        img={spec_1}
                        title='Доктор Аблай Туркесович'
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
                    />
                    <Card
                        img={spec_1}
                        title='Доктор Аблай Туркесович'
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
                    />
                    <Card
                        img={spec_1}
                        title='Доктор Аблай Туркесович'
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
                    />
                    <Card
                        img={spec_1}
                        title='Доктор Аблай Туркесович'
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
                    />
                </div>
                <div className="btn--center">
                    <button className="btn btn--dark">Подробнее</button>
                </div>
            </div>
        </section>
    );
};

export default Specialists;