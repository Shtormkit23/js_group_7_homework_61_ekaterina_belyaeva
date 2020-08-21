import React from 'react';
import './Character.css';


const Character = props => {
    return (
        <div className="character">
            <div className="img">
                <img src={props.img} alt="img" className="rickAndMorty-img"/>
            </div>
            <h3 className="name">Name: {props.name}</h3>
            <p className="origin">Status: {props.status}</p>
            <p className="origin">Origin: {props.origin}</p>
        </div>
    );
};

export default Character;