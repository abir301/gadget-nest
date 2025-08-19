import { useEffect, useState } from "react";
import { getWishlistItems } from "..";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const wish = getWishlistItems();
    setWishlistItems(wish);

    const handle = () => setWishlistItems(getWishlistItems());
    window.addEventListener("wishlist-changed", handle);
    return () => window.removeEventListener("wishlist-changed", handle);
  }, []);

  return (
    <section>
      <Helmet>
        <title>Wishlist | Gadget Heaven</title>
      </Helmet>

      <div className="bg-purple-600">
        <h1 className="text-3xl font-bold text-white text-center w-[900px] mx-auto pt-10">
          Wishlist
        </h1>
        <p className="text-white text-center w-[900px] mx-auto py-4 ">
          Save your favorite gadgets for later!
        </p>
      </div>

      <div className="ml-72 mt-10">
        <h1 className="font-bold text-3xl">Wishlist</h1>
      </div>
      <div className="flex flex-col gap-4 items-center mt-10">
        {wishlistItems.map((item) => (
          <div
            key={item.product_id}
            className="flex items-center gap-10 bg-white w-[800px] py-4 rounded-lg"
          >
            <img
              src={item.product_image}
              alt={item.product_title}
              className="w-28 h-28 object-cover ml-10 rounded-lg"
            />
            <div>
              <h1 className="font-bold text-xl">{item.product_title}</h1>
              <p className="text-gray-500 font-medium">
                Description: {item.description}
              </p>
              <p className="text-gray-500 font-medium text-lg">
                Price: ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
