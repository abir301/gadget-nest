import { useLoaderData, useParams } from "react-router-dom";

const Singledata = () => {

    const data = useLoaderData();
    const { product_id } = useParams();
    let findData =  data.find(item => item.product_id === product_id) 
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

            </div>

            </div>
        </div>
    );
};

export default Singledata;
