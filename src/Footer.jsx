import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-purple-800 text-white mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center">
                                <span className="text-white font-bold text-lg">E</span>
                            </div>
                            <span className="text-xl font-bold">Gadget Nest</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Your trusted source for high-quality electronic components and parts.
                            Building the future, one circuit at a time.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/faq"
                                    className="text-gray-300 hover:text-white text-sm transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop"
                                    className="text-gray-300 hover:text-white text-sm transition-colors"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/login"
                                    className="text-gray-300 hover:text-white text-sm transition-colors"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/shop/laptop"
                                    className="text-gray-300 hover:text-white text-sm transition-colors"
                                >
                                    Laptop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop/watch"
                                    className="text-gray-300 hover:text-white text-sm transition-colors"
                                >
                                    Watch
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop/earphones"
                                    className="text-gray-300 hover:text-white text-sm transition-colors"
                                >
                                    Earphones
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><span className="text-gray-300 text-sm">Email: support@gadgetnest.com</span></li>
                            <li><span className="text-gray-300 text-sm">Phone: 12345678901</span></li>
                            <li><span className="text-gray-300 text-sm">Hours: Sun-Thu 9AM-6PM</span></li>
                        </ul>
                    </div>
                </div>

                <div className=" pt-4 mt-8">
                    <p className="text-gray-300 text-sm text-center"> © 2025 Gadget Nest. All rights reserved.</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;