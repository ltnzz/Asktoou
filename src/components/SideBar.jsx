import React, { useState }from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const SideBar = () => {
    const communities = [
        { id: 1, name: "Jual beli musang", icon: "🦡", slug: "jual-beli-musang" },
        { id: 2, name: "Jual beli kambing", icon: "🐐", slug: "jual-beli-kambing" },
        { id: 3, name: "Jual beli hp", icon: "📱", slug: "jual-beli-hp" },
        { id: 4, name: "Jual beli motor", icon: "🏍️", slug: "jual-beli-motor" },
        { id: 5, name: "Jual beli laptop", icon: "💻", slug: "jual-beli-laptop" },
        { id: 6, name: "Jual beli burung", icon: "🐦", slug: "jual-beli-burung" },
        { id: 7, name: "Jual beli baju", icon: "👕", slug: "jual-beli-baju" },
        { id: 8, name: "Jual beli sepatu", icon: "👟", slug: "jual-beli-sepatu" },
    ]
    
const [showAll, setShowAll] = useState(false);

const displayedCommunities = showAll ? communities : communities.slice(0, 5);

    return (
        // communitiy
        <aside className="w-36 bg-[#222831] text-white h-screen p-2 pt-17 flex flex-col ml-24 border-r-1 overflow-y-auto fixed">
            
            {/* <h2 className="text-sm text-white font-bold mb-2 text-center border-b-1 p-2 border-white">Community</h2> */}
            <div className="overflow-y-auto flex-0.5 text-sm text-left">
                {displayedCommunities.map((com) => (
                <a
                key={com.id}
                    href={`/communities/${com.slug}`}
                    className="block font-bold mb-3 p-1 hover:bg-gray-700 rounded"
                >
                    {com.icon} {com.name}
                </a>
            ))}
            </div>

            {communities.length > 6 && (
                <button
                onClick={() => setShowAll(!showAll)}
                className="text-left text-xs/1 hover:text-violet-500 mt-2"
                title={showAll ? "Show Less" : "Show More"}
                >
                    {showAll ? "Tampilkan lebih sedikit" : <HiOutlineDotsHorizontal />}
                </button>
            )}

            <div className="border-b-1 p-2 border-white/30"></div>

            <footer className="text-xs text-gray-400 mt-2 flex flex-row gap-2 flex-wrap ">
                <a href="#" className="border-b border-transparent hover:border-gray-400 transition">About Us</a>
                <a href="#" className="border-b border-transparent hover:border-gray-400 transition" >Policy</a>
                <a href="#" className="border-b border-transparent hover:border-gray-400 transition">Privacy</a>
                <a href="#" className="border-b border-transparent hover:border-gray-400 transition">Ads</a>
                <a href="#" className="border-b border-transparent hover:border-gray-400 transition">Help Us</a>
            </footer>

        </aside>
    )
}

export default SideBar;