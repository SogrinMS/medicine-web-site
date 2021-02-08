import React from 'react';

import styles from './VerticalLines.module.css';

const VerticalLines = (props) => {
    return (
        <div className={styles.verticalLines}>
            <div className={styles.line} style={{ backgroundColor: props.color }}></div>
            <div className={styles.line} style={{ backgroundColor: props.color }}></div>
        </div>
    );
};

export default VerticalLines;