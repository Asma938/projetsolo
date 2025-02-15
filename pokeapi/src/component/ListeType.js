import React, { useEffect, useState } from 'react';
import api from '../api/config';
import './listeType.css';

function ListePokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        
        const response = await api.get('/pokemon?limit=500');
        const pokemon = response.data.results;

        
        const pokemonListe = await Promise.all(
          pokemon.map(async (pokemon) => {
            const Response = await api.get(pokemon.url);
            return {
              name: Response.data.name,
              image: Response.data.sprites.front_default,
              types: Response.data.types.map((type) => type.type.name),
            };
          })
        );

        setPokemons(pokemonListe);
        setLoading(false);
      } catch (error) {
        console.error('Erreur pour avoir les données :', error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <div>Chargement...</div>; 
  }

  return (
    <div>
      <h1>Liste des Pokémon</h1>
      <div className="Pokemon" >
        {pokemons.map((pokemon, index) => (
          <div className='Pokemon'
            key={index}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              
            />
            <h3>{pokemon.name}</h3>
            <p>Types : {pokemon.types.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListePokemon;
