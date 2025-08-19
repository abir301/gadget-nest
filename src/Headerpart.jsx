import { useNavigate } from "react-router-dom";
import { getCurrentUser } from ".";
import { Link } from "react-router-dom";

const Headerpart = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  return (
    <header className="">
      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center ">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Discover the Latest Tech, <br /> Tailored for You
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl">
            Find laptops, phones, smartwatches, and audio that fit your lifestyle.
            Save favorites, build your cart, and check out seamlessly.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/shop")}
              className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-purple-100 transition"
            >
              Shop Now
            </button>
            <button
              onClick={() => navigate("/faq")}
              className="px-6 py-3 border border-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition"
            >
              Learn More
            </button>
          </div>

        </div>
      </div>

      <div className="py-10">
        <h1 className="text-center mb-10 text-4xl font-bold">Our Products</h1>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <Link to="/shop/laptop" className="bg-white drop-shadow-lg rounded-lg hover:-translate-y-2 duration-300"
          >
            <div className="flex flex-col items-center justify-center gap-2 h-32">
              <span className="text-3xl">💻</span>
              <p className="font-semibold">Laptops</p>
            </div>
          </Link>

          <Link
            to="/shop/phone"
            className="bg-white drop-shadow-lg rounded-lg hover:-translate-y-2 duration-300"
          >
            <div className="flex flex-col items-center justify-center gap-2 h-32">
              <span className="text-3xl">📱</span>
              <p className="font-semibold">Phones</p>
            </div>
          </Link>

          <Link
            to="/shop/watch"
            className="bg-white drop-shadow-lg rounded-lg hover:-translate-y-2 duration-300"
          >
            <div className="flex flex-col items-center justify-center gap-2 h-32">
              <span className="text-3xl">⌚</span>
              <p className="font-semibold">Smartwatches</p>
            </div>
          </Link>

          <Link
            to="/shop/audio"
            className="bg-white drop-shadow-lg rounded-lg hover:-translate-y-2 duration-300"
          >
            <div className="flex flex-col items-center justify-center gap-2 h-32">
              <span className="text-3xl">🎧</span>
              <p className="font-semibold">Audio</p>
            </div>
          </Link>

        </div>
      </div>
      <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Gadget Nest?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide top-quality electronic gadgets with fast shipping and expert support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h13v-2a1 1 0 011-1h3l3 4v5a2 2 0 01-2 2h-1a2 2 0 01-2-2h-8a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">Fast Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick delivery on all orders with reliable tracking and secure packaging
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">Quality Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                All components are tested and verified to meet the highest industry standards
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 14v-2a6 6 0 10-12 0v2m12 0a2 2 0 002 2h1a1 1 0 001-1v-2a9 9 0 10-18 0v2a1 1 0 001 1h1a2 2 0 002-2m12 0v6a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Technical support from experienced engineers to help with your projects
              </p>
            </div>
          </div>


        </div>
      </section>


    </header>
  );
};

export default Headerpart;
