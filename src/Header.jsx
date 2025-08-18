import { NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getCartItems, getCurrentUser, getWishlistItems, logout } from '.';


const Header = () => {
    const navigate = useNavigate()
    const [cartCount, setCartCount] = useState(0)
    const [wishCount, setWishCount] = useState(0)
    const [user, setUser] = useState(getCurrentUser())

    useEffect(() => {
        const updateCounts = () => {
            setCartCount(getCartItems().length)
            setWishCount(getWishlistItems().length)
        }
        updateCounts()
        const handleCart = () => updateCounts()
        const handleWish = () => updateCounts()
        const handleUser = () => setUser(getCurrentUser())
        window.addEventListener('cart-changed', handleCart)
        window.addEventListener('wishlist-changed', handleWish)
        window.addEventListener('user-changed', handleUser)
        return () => {
            window.removeEventListener('cart-changed', handleCart)
            window.removeEventListener('wishlist-changed', handleWish)
            window.removeEventListener('user-changed', handleUser)
        }
    }, [])

    return (
        <section className="sticky top-0 z-50 bg-white">
        <div className="flex justify-around py-6 text-black bg-white shadow-md">
            <h1 className="font-bold text-3xl">Gadget Heaven</h1>
            <div className="flex items-center gap-14">
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-purple-700 underline' : ''}`} to='/' >Home</NavLink>
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-purple-700 underline' : ''}`} to='/statistics'>Statistics</NavLink>
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-purple-700 underline' : ''}`} to='/dashboard'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-purple-700 underline' : ''}`} to='/faq'>FAQ</NavLink>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <IoCartOutline className="size-10 border-2 p-2 rounded-full text-black bg-white" />
                    {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-2">{cartCount}</span>}
                </div>
                <div className="relative">
                    <FaRegHeart className="size-10 border-2 p-2 rounded-full text-black bg-white"/>
                    {wishCount > 0 && <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-2">{wishCount}</span>}
                </div>
                {user ? (
                    <button onClick={() => { logout(); navigate('/'); }} className="border-2 border-white bg-white text-purple-600 font-medium rounded-full px-4 py-1">Logout</button>
                ) : (
                    <button onClick={() => navigate('/login')} className="border-2 border-white bg-white text-purple-600 font-medium rounded-full px-4 py-1">Login</button>
                )}
            </div>
        </div>
        </section>

    );
};

export default Header;