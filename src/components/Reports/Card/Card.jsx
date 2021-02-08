import React from 'react';

import styles from './Card.module.css'

const Card = (props) => {

    const play = (
        <svg className={styles.play} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.440002 12C0.440002 18.392 5.608 23.56 12 23.56C18.392 23.56 23.56 18.392 23.56 12C23.56 5.60799 18.392 0.439987 12 0.439987C5.608 0.439987 0.440002 5.60799 0.440002 12ZM1.8 12C1.8 6.35599 6.356 1.79999 12 1.79999C17.644 1.79999 22.2 6.35599 22.2 12C22.2 17.644 17.644 22.2 12 22.2C6.356 22.2 1.8 17.644 1.8 12ZM18.8 12L8.59996 6.08403V17.916L18.8 12ZM9.95996 15.536V8.39603L16.08 11.932L9.95996 15.536Z" fill="#F9F9F9" />
        </svg>);

    return (
        <div className={styles.card}>
            <img src={props.img} alt={props.text} className={styles.bgImg} />
            <div className={styles.shadow}></div>
            <button className={`btn ${styles.btn}`}>Увеличить</button>
            <div className={styles.description}>
                {props.isVideo && play}
                <p className={styles.text}>{props.text}</p>
            </div>
        </div>
    );
};

export default Card;