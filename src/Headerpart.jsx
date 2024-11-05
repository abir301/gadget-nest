const Headerpart = () => {
    return (
        <div>
            <div className="bg-purple-500">
            <div className="flex items-center flex-col ">
            <h1 className="text-5xl font-bold text-white text-center w-[900px] mx-auto pt-10">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="text-white text-center w-[900px] mx-auto py-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="bg-white rounded-full font-medium text-center py-2 px-4 text-purple-500 mb-[300px]">Shop Now</button>
            </div>
         <div className="border-2 border-gray-50 p-4 w-fit rounded-lg absolute bottom-[150px] left-1/2 -translate-x-1/2">
            <img className="h-[400px] w-[800px] rounded-lg" src="/public/images/banner.jpg" alt="" />
        </div>

        </div>
        <h1 className="mt-52 mb-10 text-center text-5xl font-bold">Explore Cutting Edge-Gadgets</h1>
        </div>
    );
};

export default Headerpart;