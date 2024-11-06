import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";




const Home = () => {
    return (
        <section>
        <Helmet>
        <title>Home | Gadget Heaven</title>
        </Helmet>   
            <div>
                <Toaster/>
                </div>
        <div className="bg-gray-100">
            <Header></Header>
            <Outlet></Outlet>

            <Footer></Footer>
            </div>

        </section>


    );
};

export default Home;