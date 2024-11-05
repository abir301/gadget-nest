
const Data = ({allData}) => {
    let {product_title , price} = allData
    return (
        <div>
            <p>{product_title}</p>
            <p>{price}</p>
            <button className="border-2 py-1 px-3 rounded-full text-[rgb(149,56,226)] border-[rgb(149,56,226)]">View Details</button>
        </div>
    );
};

export default Data;