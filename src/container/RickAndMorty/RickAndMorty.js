import React, {useEffect, useState} from 'react';
import './RickAndMorty.css';
import * as axios from "axios";
import Character from "../../components/Character/Character";

const URL = 'https://rickandmortyapi.com/api/character/';
const RickAndMorty = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const charactersResponse = await axios.get(URL);
            setCharacters(charactersResponse.data.results);
        };
        fetchData().catch(e => console.error(e));
    }, []);

    return (
        <>
            <div className="rickAndMorty">
                <div className="characters">
                    {characters.map(character => (
                        <Character
                            name={character.name}
                            key={character.id}
                            origin={character.origin.name}
                            img={character.image}
                            status={character.status}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default RickAndMorty;