import { useNavigate } from "react-router-dom";

export default function Navbar ({handleSearch}){
    let navigate = useNavigate();
    return (
        <nav className="fixed left-0 right-0 bottom-5 py-2 px-4 m-auto rounded-full shadow-md bg-white flex w-min gap-3">
            <input type="text" placeholder="Search..." className="w-96 h-10 rounded-full border-2 px-4" onChange={($event) => handleSearch($event.target.value)} />
            <a className="flex items-center gap-3 justify-center cursor-pointer" onClick={() => navigate('/')}>
                <img className="w-10" src="https://www.svgrepo.com/show/276264/pokeball-pokemon.svg" alt="pokeball" />
            </a>
        </nav>
    )
}