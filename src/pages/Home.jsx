import React from "react";
import Navbar from "../components/NavBar.jsx";
import SideBar from "../components/SideBar.jsx";
import TimeLine from "../components/Ask.jsx";
import Post from "../components/Post.jsx";

const Home = () => {
    return (
        <div className="bg-black">
            <Navbar />
            <SideBar />
            <TimeLine />
            <Post />
            {/* <div className='text-sky-500 flex items-center'>Halo gais</div> */}
        </div>
    )
}
export default Home;