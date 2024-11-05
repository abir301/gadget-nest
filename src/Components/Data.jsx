import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Data = ({allData}) => {

    let {product_title , price , product_image , product_id} = allData
    const navigate = useNavigate()
    const location = useLocation()

    let singleData = () =>{
        if (location.pathname === product_id ) {
            navigate(`${product_id}/${product_id}`)
        }
        navigate(`product/${product_id}`)
    }

    return (
        <div className="border-2 rounded-lg p-4 bg-white w-[300px]">
            <div className="flex items-center justify-center">
            <img className="h-52 w-fit rounded-lg" src={product_image} alt="" />
            </div>

            <p className="text-xl font-bold my-2">{product_title}</p>
            <p className="my-2 font-medium text-gray-500">{price}</p>
            <button onClick={singleData} className="font-medium border-2 my-2 py-1 px-3 rounded-full text-[rgb(149,56,226)] border-[rgb(149,56,226)]">View Details</button>
        </div>
    );
};

export default Data;