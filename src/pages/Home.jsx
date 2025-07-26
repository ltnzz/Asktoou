import React from "react";
import Navbar from "../components/NavBar.jsx";
import SideBar from "../components/SideBar.jsx";
import Main from "../components/Main.jsx";

const Home = () => {
    return (
        <div className="bg-black">
            <Navbar />
            <SideBar />
            <Main />
            {/* <div className='text-sky-500 flex items-center'>Halo gais</div> */}
        </div>
    )
}
export default Home;