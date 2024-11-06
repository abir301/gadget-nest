import { Helmet } from "react-helmet";

const Faq = () => {
    return (
        <div>
        <Helmet>
        <title>FAQ | Gadget Heaven</title>
        </Helmet>  
            <div className="bg-purple-600">
                <h1 className="text-3xl font-bold text-white text-center w-[900px] mx-auto pt-10">FAQ</h1>
                <p className="text-white text-center w-[900px] mx-auto py-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="mx-auto w-[80%]">
            <div className="bg-white p-6 rounded-lg my-6">
                <h1 className="text-2xl font-bold mt-2 mb-4">Shipping and Delivery</h1>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">What shipping options do you offer?</div>
                    <div className="collapse-content">
                        <p>We offer standard shipping, express shipping, and international shipping. Delivery times vary based on your location.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">How much does shipping cost?</div>
                    <div className="collapse-content">
                        <p>Shipping costs depend on your location and the size of your order. You can view the shipping cost during checkout.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">How long does delivery take?</div>
                    <div className="collapse-content">
                        <p>Standard shipping typically takes 3-7 business days. Express shipping can deliver your order in 1-3 business days.</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg my-6">
                <h1 className="text-2xl font-bold mt-2 mb-4">Products & Inventory</h1>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">How do I know if a product is in stock?</div>
                    <div className="collapse-content">
                        <p>You can check the product availability on the product page. If the product is out of stock, you can sign up for email notifications when it becomes available.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">Do you restock sold-out items?</div>
                    <div className="collapse-content">
                        <p>Yes, we regularly restock popular items. Check back soon or subscribe to our newsletter for restock updates.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">Can I get more details about a product before purchasing?</div>
                    <div className="collapse-content">
                        <p>Each product page includes detailed specifications, reviews, and images to help you make an informed decision. If you need more information, feel free to contact us.</p>
                    </div>
                </div>

            </div>
            <div className="bg-white p-6 rounded-lg my-6">
                <h1 className="text-2xl font-bold mb-4 mt-2">Returns & Refunds</h1>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">What is your return policy?</div>
                    <div className="collapse-content">
                        <p>We accept returns within 30 days of purchase for unused, unopened products. The item must be in its original packaging. For more details, visit our returns page.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">How do I request a return or refund?</div>
                    <div className="collapse-content">
                        <p>To request a return, please contact our customer support team with your order number and the reason for the return.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">When will I receive my refund?</div>
                    <div className="collapse-content">
                        <p>Refunds are processed within 5-7 business days once the returned item is received and inspected.</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg my-6">
                <h1 className="text-2xl font-bold mt-2">Account & Security</h1>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">Do I need an account to shop?</div>
                    <div className="collapse-content">
                        <p>No, you can shop as a guest. However, creating an account will help you track orders and save your shipping information for faster checkout.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">Is my personal information safe on your site?</div>
                    <div className="collapse-content">
                        <p>Yes, we take your privacy and security seriously. We use SSL encryption to protect your personal and payment information.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                    <div className="collapse-title text-xl font-medium">How do I reset my password?</div>
                    <div className="collapse-content">
                        <p>If you’ve forgotten your password, click the Forgot Password link on the login page and follow the instructions to reset it.</p>
                    </div>
                </div>
            </div>
            </div>






        </div>
    );
};

export default Faq;