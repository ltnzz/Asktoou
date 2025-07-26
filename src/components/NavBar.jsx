import React, { useState, useRef, useEffect} from "react";
import { NavLink } from "react-router-dom";
import coba from "../assets/coba.png";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
            window.addEventListener('click', handleClickOutside);
            return () => {
                window.removeEventListener('click', handleClickOutside);
            }
        })

// data-data sementara
const user = {
    name: "Bone",
    avatar: coba,
};

const NavLinks = [
    { name: "home", href: "/", icon: "home" },
    { name: "message", href: "/message", icon: "message" },
    { name: "community", href: "/communities", icon: "community" },
    { name: "notification", href: "/notification", icon: "notification" },
]

const icons = {
    home: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>
    ),
    message: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1H9.171L9 16.171V16H6c-.542 0-1-.458-1-1V8c0-.542.458-1 1-1zm0-2H6C4.35 5 3 6.35 3 8v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3V8c0-1.65-1.35-3-3-3"/></svg>
    ),
    community: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0"/><path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5"/><path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg>
    ),
    notification: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M5 9a7 7 0 0 1 14 0v3.764l1.822 3.644A1.1 1.1 0 0 1 19.838 18h-3.964a4.002 4.002 0 0 1-7.748 0H4.162a1.1 1.1 0 0 1-.984-1.592L5 12.764zm5.268 9a2 2 0 0 0 3.464 0zM12 4a5 5 0 0 0-5 5v3.764a2 2 0 0 1-.211.894L5.619 16h12.763l-1.17-2.342a2 2 0 0 1-.212-.894V9a5 5 0 0 0-5-5"/></g></svg>
    )
}
// data-data sementara

    return (
        <nav className="w-full bg-slate-900 shadow sticky top-0 left-0 px-6 z-10 h-16 flex items-center justify-between">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
                {/* logo */}
                <div style={{ color: "#5771ff" }} className="text-3xl font-bold pr-4">
                    <a href="/">Asktoou</a>
                </div>
                {/* logo */}

                {/* navigation links */}
                <div className="flex items-center text-gray-700 gap-8">
                    {NavLinks.map((nav, index) => (
                        <NavLink
                        key={index} 
                        to={nav.href}
                        className={({ isActive }) => 
                            `pb-1 ${
                                isActive
                                    ? "text-[#5771ff] transition-colors duration-300 hover:text-violet-500 border-b-2 border-violet-500"
                                    : "text-gray-700 hover:text-[#5771ff] transition-colors duration-300"
                            } transition-colors duration-300`
                        }
                        title={nav.name}
                        >
                            {icons[nav.name]}
                        </NavLink>
                    ))}
                </div>
                {/* navigation links */}

                {/* search-bar */}
                <div className="flex items-center bg-white rounded-md px-3 py-1 w-full max-w-xs">
                    <input type="text" placeholder="Cari sesuatu di Asktoou" className="w-full outline-none text-gray-800 placeholder-gray-400 bg-transparent"/>
                    <a href="/">
                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
                    </a>
                </div>
                {/* search-bar */}

                {/* profile */}
                <div className="relative inline-flex items-center gap-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 p-0 m-0 h-8 w-8 focus:outline-none" ref={dropdownRef}>
                        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover border-2 border-white hover:ring-2 ring-violet-400"/>
                    </button>

                    { isOpen && (
                        <div className="absolute left-0 mt-1.5 w-30 bg-black rounded-md shadow-lg z-50 text-sm hover:rounded-2 text-gray-700 top-11">
                            <a href="/profile" className="block text-white px-4 py-2 hover:bg-gray-500 hover:rounded-t-md">
                                Profile
                            </a>
                            <a href="/settings" className="block text-white px-4 py-2 hover:bg-gray-500">
                                Settings
                            </a>
                            <button onClick={() => alert('Logout')} className="w-full text-white text-left px-4 py-2 hover:bg-gray-500 hover:rounded-b-md"> 
                                <a href="/">Logout</a>
                            </button>
                        </div>
                    )}
                </div>
                {/* profile */}

                {/* question */}
                <button 
                type="button"
                className="flex items-center justify-center bg-violet-500 rounded-xl px-7 py-1.5 w-fit text-white font-bold cursor-pointer hover:bg-violet-800 transition-colors duration-300 whitespace-nowrap"
                >
                    Tulis Sesuatu
                </button>
                {/* question */}
            </div>
        </nav>
    )
}

export default NavBar;