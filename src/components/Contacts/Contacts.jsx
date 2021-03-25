import React from 'react';

import './Contacts.css';

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="contacts__wrapper max-width">
                <h2 className="block__title price__title text--dark text--upper">Контакты</h2>
                <div className="contacts__map"></div>
                <div className="contacts__row">
                    <div className="contacts__column">
                        <p className="contacts-title text--dark">Адреса компании</p>
                        <p className="contacts-text text--dark">Ул. Печугина 240/1, г. Караганда, 100000, Казахстан</p>
                    </div>
                    <div className="contacts__column">
                        <p className="contacts-title text--dark">Номера телефонов</p>
                        <p className="contacts-text text--dark">+7 700 000 00 00</p>
                        <p className="contacts-text text--dark">+7 700 000 00 00</p>
                    </div>
                    <div className="contacts__column">
                        <p className="contacts-title text--dark">Дополнительные способы связи</p>
                        <p className="contacts-text text--dark">support@test.kz</p>
                        <p className="contacts-text text--dark">support@test.kz</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;