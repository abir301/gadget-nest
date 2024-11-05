import { useLoaderData, NavLink, useParams } from "react-router-dom";
import Data from "./Data";

const Homecontent = () => {
    const data = useLoaderData();
    const { category } = useParams();

    let filteredData = category ? data.filter(item => item.category.toLowerCase() === category) : data;

    return (
        <section className="w-[80%] mx-auto">
            <div className="flex justify-evenly">
                <div className="flex flex-col gap-2 bg-white p-6 rounded-lg border-2 h-fit">
                    <NavLink to="/" className={({ isActive }) =>`pl-6 p-2 rounded-full w-40 font-medium ${isActive ? 'text-white bg-[rgb(149,56,226)]' : 'text-gray-500 bg-gray-100'}`}>All Products</NavLink>
                    <NavLink to="/laptop" className={({ isActive }) =>`pl-6 p-2 rounded-full w-40 font-medium ${isActive ? 'text-white bg-[rgb(149,56,226)]' : 'text-gray-500 bg-gray-100'}`}>Laptop</NavLink>
                    <NavLink to="/watch" className={({ isActive }) =>`pl-6 p-2 rounded-full w-40 font-medium ${isActive ? 'text-white bg-[rgb(149,56,226)]' : 'text-gray-500 bg-gray-100'}`}>Watch</NavLink>
                    <NavLink to="/earphones" className={({ isActive }) =>`pl-6 p-2 rounded-full w-40 font-medium ${isActive ? 'text-white bg-[rgb(149,56,226)]' : 'text-gray-500 bg-gray-100'}`}>Earphones</NavLink>
                    <NavLink to="/phone" className={({ isActive }) =>`pl-6 p-2 rounded-full w-40 font-medium ${isActive ? 'text-white bg-[rgb(149,56,226)]' : 'text-gray-500 bg-gray-100'}`}>Phone</NavLink>
                    <NavLink to="/accessories" className={({ isActive }) =>`pl-6 p-2 rounded-full w-40 font-medium ${isActive ?'text-white bg-[rgb(149,56,226)]' : 'text-gray-500 bg-gray-100'}`}>Accessories</NavLink>

                </div>
                <div className="grid grid-cols-3 gap-6">
                    {filteredData.slice(0, 9).map(allData => (
                        <Data key={allData.product_id} allData={allData} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Homecontent;
