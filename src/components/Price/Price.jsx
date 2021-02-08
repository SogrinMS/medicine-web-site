import React from 'react';
import VerticalLines from './../VerticalLines/VerticalLines'

import './Price.css';

const Price = () => {
    return (
        <section className="price">
            <div className="price__wrapper max-width">
                <VerticalLines color='#F3F5FA' />
                <div className="price__inner">
                    <h2 className="block__title price__title text--dark text--upper">Прайс лист</h2>
                    <div className="price__row">
                        <div className="price-table">
                            <div className="price-table__row">
                                <p className="price-table__title text--dark">Название услуги</p>
                                <p className="price-table__title text--dark">Стоимость</p>
                            </div>
                            <div className="price-table__row">
                                <p className="price-table__text">Название услуги в несколько строк</p>
                                <p className="price-table__price text--dark">3000 / час</p>
                            </div>
                            <div className="price-table__row">
                                <p className="price-table__text">Название услуги в несколько строк</p>
                                <p className="price-table__price text--dark">3000 / час</p>
                            </div>
                            <div className="price-table__row">
                                <p className="price-table__text">Название услуги в несколько строк</p>
                                <p className="price-table__price text--dark">3000 / час</p>
                            </div>
                            <div className="price-table__row">
                                <p className="price-table__text">Название услуги в несколько строк</p>
                                <p className="price-table__price text--dark">3000 / час</p>
                            </div>
                            <div className="price-table__row">
                                <p className="price-table__text">Название услуги в несколько строк</p>
                                <p className="price-table__price text--dark">3000 / час</p>
                            </div>
                        </div>
                        <div className="price-table">
                            <div className="price-table__row">
                                <p className="price-table__title text--dark">Название услуги</p>
                                <p className="price-table__title text--dark">Стоимость</p>
                            </div>
                            <div className="price-table__row">
                                <p className="price-table__text text--extra-bold">Название услуги в несколько строк</p>
                                <p className="price-table__price text--dark">3000 / час</p>
                            </div>
                            <div className="price-table__row">
                                <p className="price-table__text text--extra-bold">Название услуги в несколько строк</p>
                                <p className="price-table__price text--dark">3000 / час</p>
                            </div>
                            <div className="price-table__row">
                                <p className="price-table__text text--extra-bold">Название услуги в несколько строк</p>
                                <p className="price-table__price text--dark">3000 / час</p>
                            </div>
                            <div className="price-table__row">
                                <p className="price-table__text text--extra-bold">Название услуги в несколько строк</p>
                                <p className="price-table__price text--dark">3000 / час</p>
                            </div>
                            <div className="price-table__row">
                                <p className="price-table__text text--extra-bold">Название услуги в несколько строк</p>
                                <p className="price-table__price text--dark">3000 / час</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn--center">
                    <button className="btn btn--dark">Читать полностью</button>
                </div>
            </div>
        </section>
    );
};

export default Price;