export default function EmptyPokemon () {
    return (
        <div className="max-w-6xl sticky py-10 top-20 h-detail bg-white rounded-xl shadow-xl w-full mx-auto text-center flex flex-col items-center justify-center">
            <img className="w-96 h-auto contrast-0" src="public/pikachu.png" alt="" />
            <h2 className="text-slate-300 font-medium text-5xl mt-10">No found pokemon</h2>
        </div>
    )
}