import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { addToCart , addToWishlist} from "..";
import { useState } from "react";



const Singledata = () => {
    const data = useLoaderData();
    const { product_id } = useParams();
    const [wishlist, checkWishlist] = useState(false)
    let findData =  data.find(item => item.product_id === product_id) 


    let handleCart = (findData)=>
        addToCart(findData)
    let handleWishlist = (findData)=> {
        addToWishlist(findData)
        checkWishlist(true)

    }


    return (
        <div>
 
            <div className="bg-purple-600">
            <h1 className="text-3xl font-bold text-white text-center w-[900px] mx-auto pt-10">Product Details</h1>
            <p className="text-white text-center w-[900px] mx-auto py-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="flex gap-10 items-center bg-white w-fit mx-auto mt-10 p-16 rounded-lg">
            <div>
                <img className="w-96 bg-gray-100 rounded-lg" src={findData.product_image} alt= ""/>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{findData.product_title}</h1>
                <p className="text-lg font-bold">Price: ${findData.price}</p>
                <p className="font-medium border-green-500 text-green-500 border-2 rounded-full w-fit py-0.5 px-2 bg-green-100">In Stock</p>
                <p className="text-gray-500 font-medium">{findData.description}</p>
                <p className="font-bold text-lg">Specifications:</p>
                <div>
                {findData.Specification.map((spec) => (<p className="text-gray-500 font-medium" key={spec}>{spec}</p>))}
                </div>
                <p className="font-bold text-lg">Ratings {findData.rating} (Out of 5)</p>
                <div className="flex items-center gap-3">
                <button onClick={() => handleCart(findData)} className="flex items-center gap-2 bg-purple-600 rounded-full w-fit py-1 px-3 text-white font-medium text-lg"><IoCartOutline className="size-8" /> Add to Cart</button>
                    <button disabled={wishlist} onClick={() => handleWishlist(findData)}><FaRegHeart className={`size-10 border-2 p-2 rounded-full bg-white ${wishlist ? ' text-gray-300 ' : 'text-black'}`}/></button>
                </div>

                
            </div>

            </div>
        </div>

    );
};

export default Singledata;
