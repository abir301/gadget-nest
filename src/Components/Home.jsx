import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";


const Home = () => {
    return (
        <section>
        <div className="bg-gray-50">
            <Header></Header>
            <Outlet></Outlet>
        </div>
            <Footer></Footer>
        </section>


    );
};

export default Home;