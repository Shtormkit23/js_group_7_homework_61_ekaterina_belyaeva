import React, {useEffect, useState} from 'react';
import './FullInfo.css';
import * as axios from "axios";

const COUNTRY_URL = 'https://restcountries.eu/rest/v2/alpha/'

const FullInfo = props => {
    const [borders, setBorders] = useState([]);

    useEffect(() => {
        if(props.country !== null) {
            const getCountryBorders = async () => {
                const promises = props.country.borders.map(async border => {
                    const borderResponse = await axios.get(COUNTRY_URL + border);
                    if (borderResponse.data !== null) {
                        return borderResponse.data.name;
                    }
                });
                const newBorders = await Promise.all(promises)
                setBorders(newBorders)
            }
            getCountryBorders().catch(console.error);
        }
    }, [props.country]);

    return props.country && (
        <>
            <div className="full-info">
                <div className="flag-img">
                    <img src={props.country.img} alt="flag"/>
                </div>
                <h3>{props.country.name}</h3>
                <p>
                    <span>Borders: </span>
                    {borders.length !== 0 ? borders.join(', ') : 'Does not border with other countries'}
                </p>
                <p>
                    <span>Native name: </span>
                    {props.country.nativeName}
                </p>
                <p>
                    <span>Population: </span>
                    {props.country.population}
                </p>
            </div>
        </>
    );
};

export default FullInfo;