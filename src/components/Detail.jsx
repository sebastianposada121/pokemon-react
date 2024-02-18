import BarLists from "./BarLists"
import Chip from "./Chip";

export default function Detail({ pokemon }) {
    return (
        <div className="max-w-6xl sticky top-20 h-detail bg-white rounded-xl shadow-xl w-full grid grid-cols-[auto_1fr] items-center px-10 py-5 gap-10">
            <div className="h-full grid grid-rows-[auto_1fr]">
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-medium flex items-center text-5xl capitalize">{pokemon?.name}</h2>
                    <article className="flex items-center justify-center gap-1">
                        {pokemon?.types?.map(({ type }) =>
                            <Chip key={type?.name} name={type?.name} />
                        )}
                    </article>
                </div>

                <section className="h-full flex items-center justify-center">
                    <img className="h-full max-h-96" src={pokemon?.sprites?.other?.['official-artwork']?.front_default} alt={pokemon?.name} />
                </section>

            </div>
            <section>
                <BarLists status={pokemon?.stats} />
                <article className="mt-10 flex gap-1">
                    habilities: {pokemon?.abilities?.map(({ ability }) =>
                        <span className="px-5 rounded-full text-white bg-gray-600 shadow-lg" key={ability?.name}>{ability?.name}</span>
                    )}
                </article>
                <article className="mt-10">

                    <p className="text-gray-500 overflow-auto max-h-24">
                        <b className="text-gray-800 font-normal">Moves: </b>
                        {pokemon?.moves?.map(({ move }) => move?.name).toString()}
                    </p>
                </article>
            </section>

        </div>
    )
}