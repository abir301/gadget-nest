import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from 'react-router-dom';


const Header = () => {
    const location = useLocation()

    return (
        <section className="">
        <div className={`flex justify-around py-6  ${location.pathname === '/' ? `text-white bg-purple-500 mx-auto ` : `text-black  bg-white` }`}>
            <h1 className="font-bold text-3xl">Gadget Heaven</h1>
            <div className="flex items-center gap-14">
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-purple-700 underline' : ''}`} to='/' >Home</NavLink>
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-purple-700 underline' : ''}`} to='/statistics'>Statistics</NavLink>
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-purple-700 underline' : ''}`} to='/dashboard'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-purple-700 underline' : ''}`} to='/faq'>FAQ</NavLink>
            </div>
            <div className="flex items-center gap-6">
                <NavLink><IoCartOutline className="size-10 border-2 p-2 rounded-full text-black bg-white" /></NavLink>
                <NavLink><FaRegHeart className="size-10 border-2 p-2 rounded-full text-black bg-white"/></NavLink>
            </div>
        </div>
        </section>

    );
};

export default Header;