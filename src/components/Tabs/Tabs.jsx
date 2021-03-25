import React from 'react';

import styles from './Tabs.module.css';


const Tabs = (props) => {
    const [active, setActive] = React.useState(0);
    
    function isActive(i) {
        setActive(i);
    }

    return (
        <div className={`${styles.switcher} ${props.wrapper}`}>
            {props.tabs.map((text, i) => (
                <button key={`tabs-${i}`} className={`btn ${styles.tab} ${active === i ? styles.active : ''}`} onClick={() => {isActive(i)}}>{text}</button>
            ))}
        </div>
    );
}

export default Tabs;