import { useNavigate } from "react-router-dom";
import { getCurrentUser } from ".";

const Headerpart = () => {
    const navigate = useNavigate()
    const user = getCurrentUser()
    return (
        <div>
            <div className="bg-purple-500">
            <div className="flex items-center flex-col ">
            <h1 className="text-5xl font-bold text-white text-center w-[900px] mx-auto pt-10">Discover the Latest Tech, Tailored for You</h1>
            <p className="text-white text-center w-[900px] mx-auto py-4 ">Find laptops, phones, smartwatches, and audio that fit your lifestyle. Save favorites, build your cart, and check out seamlessly.</p>
            <div className="mb-[300px]"></div>
            </div>


        </div>
        <h1 className="mt-6 mb-10 text-center text-4xl font-bold">Explore Cutting-Edge Gadgets</h1>
        </div>
    );
};

export default Headerpart;