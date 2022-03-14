import React, {useState} from 'react';
import styles from './styles.module.css';
import axios from 'axios';

const Pokemon = () => {
    const [pokelist, setPokelist] = useState(null);


    const getPokelist = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPokelist(response.data.results))
    };

    return (
        <div>
                <button onClick={getPokelist} className={styles.button}>Fetch Pokemon</button>
                {
                    pokelist?
                    pokelist.map((pokemon, i)=><ul key={i}>{pokemon.name}</ul>)
                    :""
                }
        </div>
    )
}

export default Pokemon;