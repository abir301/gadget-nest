import { useEffect, useState } from "react";
import { getCartItems, getWishlistItems } from "..";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [cartItems, setCartItems] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [viewPage, setViewPage] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        const items = getCartItems()
        setCartItems(items)
    }, [])

    const [wishlistItems, setWishlistItems] = useState([])
    useEffect(() => {
        const wish = getWishlistItems()
        setWishlistItems(wish)
    }, [])

    let handlePurchase = () => {
        localStorage.removeItem('cart')
        setCartItems([])
        setShowModal(true)
    }
    let changeRoute = ()=> {
        setShowModal(false)
        navigate(`/`)

    }

    let sortByPrice = () => {
        let sortedItems = [...cartItems].sort((a, b) => b.price - a.price)
        setCartItems(sortedItems)
    }

    let totalCost = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)

    return (
        <section>

        <Helmet>
        <title>Dashboard | Gadget Heaven</title>
        </Helmet>     

            <div className="bg-purple-600">
                <h1 className="text-3xl font-bold text-white text-center w-[900px] mx-auto pt-10">Dashboard</h1>
                <p className="text-white text-center w-[900px] mx-auto py-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex items-center justify-center gap-10 py-6">
                    <button onClick={() => setViewPage(true)} className= {`font-medium text-xl py-2 px-12 viewpage rounded-full border-2 border-white  ${viewPage ? ` text-purple-600 bg-white `  : `text-white`}`}>Cart</button>
                    <button onClick={() => setViewPage(false)} className= {`font-medium text-xl py-2 px-12 viewpage rounded-full border-2 border-white  ${viewPage ? ` text-white `  : `text-purple-600 bg-white`}`}>Wishlist</button>
                </div>
            </div>

            {viewPage ? (<div>
                <div className="flex items-center justify-around mt-10">
                    <h1 className="font-bold text-3xl">Cart</h1>
                    <div className="flex items-center justify-center gap-4">
                        <h1 className="font-bold text-3xl">Total Cost : ${totalCost}</h1>
                        <button onClick={sortByPrice} className="border-2 border-purple-600 rounded-full py-2 px-4 font-medium text-purple-600">Sort by price</button>
                        <button onClick={handlePurchase} disabled={cartItems.length === 0} className="text-white bg-purple-600 border-2 border-purple-600 rounded-full py-2 px-4 font-medium">Purchase</button>
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center mt-10">
                    {cartItems.map((item) => (
                        <div key={item.product_id} className="flex items-center gap-10 p-4rounded-lg bg-white w-[800px] py-4 rounded-lg">
                            <img src={item.product_image} alt={item.product_title} className=" w-28 h-28 object-cover ml-10 rounded-lg" />
                            <div>
                                <h1 className="font-bold text-xl">{item.product_title}</h1>
                                <p className="text-gray-500 font-medium">Description: {item.description}</p>
                                <p className="text-gray-500 font-medium text-lg">Price: ${item.price}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            ) : (<div>
                <div className=" ml-72 mt-10">
                    <h1 className="font-bold text-3xl">Wishlist</h1>
                </div>
                <div className="flex flex-col gap-4 items-center mt-10">
                    {wishlistItems.map((item) => (
                        <div key={item.product_id} className="flex items-center gap-10 p-4rounded-lg bg-white w-[800px] py-4 rounded-lg">
                            <img src={item.product_image} alt={item.product_title} className=" w-28 h-28 object-cover ml-10 rounded-lg" />
                            <div>
                                <h1 className="font-bold text-xl">{item.product_title}</h1>
                                <p className="text-gray-500 font-medium">Description: {item.description}</p>
                                <p className="text-gray-500 font-medium text-lg">Price: ${item.price}</p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>)}




            <div>
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[400px]">
                            <img className="py-4 mx-auto" src="/public/images/Group.png" alt="" />
                            <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
                            <p className="text-gray-500">Thank you for purchasing!</p>
                            <button onClick={changeRoute} className="bg-purple-600 text-white py-2 px-4 rounded-full font-medium">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </section>

    );
};

export default Dashboard;