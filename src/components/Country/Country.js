import React from 'react';
import './Country.css';

const Country = props => {
    return (
        <>
            <li className="country" onClick={props.clicked}>
                {props.name}
            </li>
        </>
    );
};

export default Country;