import React, {useEffect, useState} from 'react';
import './Countries.css';
import Country from "../../components/Country/Country";
import * as axios from "axios";
import FullInfo from "../../components/FullInfo/FulInfo";

const URL = 'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code';
const COUNTRY_URL = 'https://restcountries.eu/rest/v2/alpha/';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const countriesResponse = await axios.get(URL);

            const promises = countriesResponse.data.map(async country => {
                const countryInfo = COUNTRY_URL + country.alpha3Code;
                const countryResponse = await axios.get(countryInfo);
                return {...country,
                    nativeName : countryResponse.data.nativeName,
                    borders: countryResponse.data.borders,
                    img: countryResponse.data.flag,
                    population: countryResponse.data.population
                };
            });
            const newCountry = await Promise.all(promises);
            setCountries(newCountry);
        };
        fetchData().catch(e => console.error(e));
    }, []);


    return (
        <>
        <div className="restCountries">
            <div className="countries">
                {countries.map(country => (
                    <Country
                        name={country.name}
                        key={country.name}
                        clicked={() => setSelectedCountry(country)}/>
                ))}
            </div>
            <section className="countriesInfo">
                <FullInfo
                    country={selectedCountry}
                />
            </section>
        </div>
            </>
    );
};

export default Countries;