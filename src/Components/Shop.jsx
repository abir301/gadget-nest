import { useLoaderData, NavLink, useParams } from "react-router-dom";
import Data from "./Data";

const Shop = () => {
    const data = useLoaderData();
    const { category } = useParams();

    let filteredData = category
        ? data.filter(item => item.category.toLowerCase() === category)
        : data;

    let categories = Array.from(new Set(data.map(d => d.category)));

    return (
        <div className=" mx-auto w-[80%]">
            <h1 className="text-center font-bold text-3xl my-10">Buy Cutting Edge Gadgets</h1>
            <div className="flex justify-center">

                <div className="flex gap-10 w-full">
                    <div className="flex flex-col gap-2 bg-white p-6 rounded-lg border-2 h-fit min-w-52">
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                `pl-6 p-2 rounded-full w-40 font-medium ${!category && isActive
                                    ? 'text-white bg-[rgb(149,56,226)]'
                                    : 'text-gray-500 bg-gray-100'
                                }`
                            }
                        >
                            All Products
                        </NavLink>

                        {categories.map(cat => (
                            <NavLink
                                key={cat}
                                to={`/shop/${cat.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `pl-6 p-2 rounded-full w-40 font-medium ${isActive
                                        ? 'text-white bg-[rgb(149,56,226)]'
                                        : 'text-gray-500 bg-gray-100'
                                    }`
                                }
                            >
                                {cat}
                            </NavLink>
                        ))}
                    </div>

                    {filteredData.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                            {filteredData.map(allData => (
                                <Data key={allData.product_id} allData={allData} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex-1 flex items-center justify-center">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                No Data Available
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Shop;
