import { useEffect, useState } from "react";
import PokemonService from "../services/pokemon"
import Card from "../components/Card";
import Detail from "../components/Detail";
import Navbar from "../components/Navbar";
import EmptyPokemon from "../components/EmptyPokemon";

export default function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState();

    const handleSearch = (event) => {
        if (!event?.length) setPokemons(pokemonList);
        setPokemons(pokemonList?.filter(item => item?.name?.includes(event)));
    }

    const getAllPokemon = async () => {
        const data = await new PokemonService().getPokemons(
            { offset: 0, limit: 20 }
        ).then(response => response?.data);
        setPokemonList(data);
        setPokemons(data);
        setPokemon(data[0]);
    }

    useEffect(() => {
        getAllPokemon();
    }, []);

    return (
        <div className="px-10 py-5 flex">
            {
                pokemons?.length ?
                    (
                            <>
                                <div className="flex flex-col gap-4 overflow-auto h-full px-6 py-10 w-96">
                                    {pokemons?.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} setPokemon={setPokemon} />)}
                                </div> 
                                <Detail pokemon={pokemon} />
                            </>
                    )
                    :
                    <EmptyPokemon />
            }
            <Navbar handleSearch={handleSearch} />
        </div>
    )
}