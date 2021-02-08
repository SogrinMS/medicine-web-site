import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={`${styles.card} text--dark`}>
            <div className={styles.imgCircle}>
                <img align="middle" src={props.img} alt={props.title} className={styles.img} />
            </div>
            <div className={styles.description}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.text}>{props.text}</p>
            </div>
        </div>
    );
};

export default Card;