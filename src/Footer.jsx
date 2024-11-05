

const Footer = () => {
    return (
        <footer className=" py-10">
            <div className=" mx-auto text-center">
                <h1 className="text-3xl font-bold">Gadget Heaven</h1>
                <p className="text-gray-500 font-medium mt-4">
                    Leading the way in cutting-edge technology and innovation.
                </p>
                <div className="flex justify-center gap-52 mt-10">
                    <div>
                        <h2 className="text-lg font-bold">Services</h2>
                        <div className="text-gray-500 font-medium mt-4 space-y-2">
                            <p>Product Support</p>
                            <p>Order Tracking</p>
                            <p>Shipping & Delivery</p>
                            <p>Returns</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Company</h2>
                        <div className="text-gray-500 font-medium mt-4 space-y-2">
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Legal</h2>
                        <div className="text-gray-500 font-medium mt-4 space-y-2">
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Cookie Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
