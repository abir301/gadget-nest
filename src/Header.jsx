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
                <NavLink>Home</NavLink>
                <NavLink>Statistics</NavLink>
                <NavLink to='/dashboard'>Dashboard</NavLink>
            </div>
            <div className="flex items-center gap-6">
                <NavLink><IoCartOutline className="size-8 border-2 p-1 rounded-full text-black bg-white" /></NavLink>
                <NavLink><FaRegHeart className="size-8 border-2 p-1 rounded-full text-black bg-white"/></NavLink>
            </div>
        </div>
        </section>

    );
};

export default Header;