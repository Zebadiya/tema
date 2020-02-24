import React from 'react';
import s from './Spiner.module.scss';

const Spiner = ({darkTheme = false}) => {
    return (
        
        <div className={s.lds_ripple_container}>
            <div className={s.lds_ripple}>
                <div className={darkTheme ? s.dark : null}></div>
                <div className={darkTheme ? s.dark : null}></div>
            </div>
        </div>
    )
}

export default Spiner;
