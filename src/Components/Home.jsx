import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { Toaster } from "react-hot-toast";




const Home = () => {
    return (
        <section>
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