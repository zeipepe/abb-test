import React from 'react';
import PropTypes from 'prop-types';
import styles from './Part.module.css'
function Part(props){
    
    return <div className={styles.part}>
        <h1>Part A</h1>
    </div>
}


Part.propTypes = {
    name: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.shape({
        control: PropTypes.string,
        dev: PropTypes.number,
        devTol: PropTypes.number
    })).isRequired
}

export default Part