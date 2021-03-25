import React from 'react';

import './Recomendations.css';

import rec_1 from './assets/image 1.png';
import rec_2 from './assets/image 2.png';
import rec_3 from './assets/image 3.png';
import rec_4 from './assets/image 4.png';
import rec_5 from './assets/image 5.png';

const Recomendations = () => {
    return (
        <section className="recomendations">
            <div className="recomendations__wrapper max-width">
                <h2 className="block__title price__title text--dark text--upper">Нас рекомендуют</h2>
                <div className="recomendations__row">
                    <img src={rec_1} alt="rec_1"/>
                    <img src={rec_2} alt="rec_2"/>
                    <img src={rec_3} alt="rec_3"/>
                    <img src={rec_4} alt="rec_4"/>
                    <img src={rec_5} alt="rec_5"/>
                </div>
            </div>
        </section>
    );
}

export default Recomendations;