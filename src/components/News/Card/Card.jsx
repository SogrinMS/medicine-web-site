import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.imageLink} alt="" className={styles.image}/>
            <div className={styles.body}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.text}>{props.text}</p>
                <a href={props.link} className={styles.link}>Читать полностью</a>
            </div>
        </div>
    );
}

export default Card;