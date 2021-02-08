import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
    return (
        <a href={props.link} className={styles.card}>
            <div className={styles.cardImg}>
                <img src={props.img} alt="" className={styles.imgBackground} />
                <div className={styles.cardShadow}></div>
                <img src={props.shortImg} alt="" className={styles.imgHover} />
            </div>
            <div className={styles.description}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.text}>{props.text}</p>
            </div>
        </a>
    );
};

export default Card;