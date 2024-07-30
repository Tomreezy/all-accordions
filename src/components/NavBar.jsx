import { Link } from "react-router-dom";



const NavBar = ()=>{
    return (
        <header className="flex justify-between items-center p-4 bg-amber-700 text-yellow-200">
            <p className="text-lg font-semibold">ACCORDIONS</p>
            <nav className="flex sm:space-x-3">
                <p className="hover:bg-amber-600 p-2 hover:underline rounded-md cursor-pointer"><Link to={"/"}>Home</Link></p>
                <p className="hover:bg-amber-600 p-2 hover:underline rounded-md cursor-pointer" ><Link to={"/without_state"}>No-state</Link></p>
                <p className="hover:bg-amber-600 p-2 hover:underline rounded-md cursor-pointer" ><Link to={"/select"}>With-select</Link></p>
            </nav>
        </header>
    )
}

export default NavBar