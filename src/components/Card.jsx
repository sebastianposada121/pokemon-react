import { useNavigate } from "react-router-dom"
import { Loader } from "./Loader";
import Chip from "./Chip";

export default function Card({ pokemon, setPokemon }) {
    return (
        <div className="bg-slate-50 p-4 rounded-xl shadow-md cursor-pointer hover:scale-110 duration-300 bg-card bg-cover" onClick={() => setPokemon(pokemon)}>

            {
                !pokemon ? <Loader /> :
                    <>
                        <section className="flex items-center justify-center">
                            <img className="w-20" src={pokemon?.sprites?.other?.['official-artwork']?.front_default} alt={pokemon?.name} />
                            <h2 className="text-2xl text-center font-semibold">{pokemon?.name}</h2>
                        </section>
                        <footer className="flex gap-1 mt-4 justify-center">
                            {pokemon?.types?.map(({ type }) => <Chip key={type?.name} name={type?.name}/>)}
                        </footer>
                    </>
            }


        </div>
    )
}