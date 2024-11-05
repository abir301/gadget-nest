import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const Header = () => {
    return (
        <div className="flex justify-around">
            <h1>Gadget Heaven</h1>
            <div className="flex items-center gap-14">
                <NavLink>Home</NavLink>
                <NavLink>Statistics</NavLink>
                <NavLink to='/dashboard'>Dashboard</NavLink>
            </div>
            <div className="flex items-center gap-6">
                <NavLink><IoCartOutline className="size-8 border-2 p-1 rounded-full" /></NavLink>
                <NavLink><FaRegHeart className="size-8 border-2 p-1 rounded-full"/></NavLink>
            </div>
        </div>
    );
};

export default Header;