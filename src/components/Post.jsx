import React, { useEffect, useState } from "react";
import coba from "../assets/coba.png"
import coba1 from "../public/coba1.png"
import coba3 from "../public/coba3.jpg"
import coba4 from "../public/coba4.jpg"
import vid1 from "../public/vid.mp4"
import { FaRegComment } from "react-icons/fa";
import { VscHeart } from "react-icons/vsc";
import { BiBarChart } from "react-icons/bi";
import { RiShare2Fill } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";

const user = {
    name: "Bone",
    view: 1000,
    like: 1000,
    comment: 100,
    avatar: coba,
    hobby: "like basketball",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    media: [
        {
            type: "image",
            src: coba3
        },
        {
            type: "image",
            src: coba4
        },
        {
            type: "image",
            src: coba4
        },
        // {
        //     type: "video",
        //     src: vid1
        // },
    ]
};

const Post = () => {
    const [viewCount, setViewCount] = useState(user.view);

    useEffect(() => {
        setViewCount((prev) => prev + 1);
    }, [])

    const [likeCount, setLikeCount] = useState(user.like);

    const handleLike = () => {
        setLikeCount((prev) => prev + 1)
    }
    
    const [commentCount, setCommentCount] = useState(user.comment);

    const handleComment = () => {
        setCommentCount((prev) => prev + 1)
    }

    return (
        <div className="bg-slate-900/80 absolute left-60 p-4 space-y-3 w-[520px] min-h-[80px] max-h-[1000px] ml-4 rounded-2xl mt-38 text-white cursor-pointer">
            <div className="flex items-center gap-2.5">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 hover:border-violet-600"/>
                <div>
                    <h1 className="font-bold text-sm">{user.name}</h1>
                    <p className="font-extralight text-xs pt-1">{user.hobby}</p>
                </div>
                <FiMoreHorizontal className="ml-80 mb-4 hover:text-gray-500"/>
            </div>
                {user.text && (
                    <div className="ml-12.5 mr-1 font-medium text-base leading-relaxed">
                        <p>{user.text}</p>
                    </div>
                )}

                {/* Media */}
                {user.media && user.media.length > 0 && (
                    user.media.length === 1 ? (
                        <div className="grid grid-cols-1 gap-1 ml-12.5 rounded-md border-2 border-solid max-w-100">
                            {user.media.map((item, idx) => (
                                <div key={idx} className="overflow-hidden rounded-xs">
                                {item.type === "image" ? (
                                    <img src={item.src} alt={`media-${idx}`} className="w-full h-64 object-cover rounded-xs" />
                                ) : (
                                    <video controls className="w-full h-64 object-cover rounded-xs">
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                )}
                                </div>
                            ))}
                        </div>
                    ) : user.media.length === 2 ? (
                        <div className="grid grid-cols-2 gap-1/2 ml-12.5 rounded-xs border-2 border-solid max-w-100">
                            {user.media.map((item, idx) => (
                                <div key={idx} className="overflow-hidden rounded-xs p-0.5">
                                {item.type === "image" ? (
                                    <img src={item.src} alt={`media-${idx}`} className="w-full h-48 object-cover rounded-xs" />
                                ) : (
                                    <video controls className="w-full h-48 object-cover rounded-xs">
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                )}
                                </div>
                            ))}
                        </div>
                    ) : user.media.length === 3 ? (
                        <div className="grid grid-cols-2 grid-rows-2 gap-1/2 ml-12.5 rounded-xs border-2 border-solid max-w-100">
                            {user.media.map((item, idx) => (
                                <div
                                key={idx}
                                className={`overflow-hidden rounded-xs p-0.5 ${idx === 0 ? "row-span-2 h-64" : "h-32"}`}
                                >
                                {item.type === "image" ? (
                                    <img src={item.src} alt={`media-${idx}`} className="w-full h-full object-cover rounded-xs" />
                                ) : (
                                    <video controls className="w-full h-full object-cover rounded-xs">
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                )}
                                </div>
                            ))}
                        </div>
                    ) : user.media.length === 4 ? (
                        <div className="grid grid-cols-2 grid-rows-2 ml-12.5 rounded-xs border-2 border-solid max-w-100">
                            {user.media.map((item, idx) => (
                                <div key={idx} className="overflow-hidden rounded-xs p-0.5">
                                {item.type === "image" ? (
                                    <img src={item.src} alt={`media-${idx}`} className="w-full h-32 object-cover rounded-xs" />
                                ) : (
                                    <video controls className="w-full h-32 object-cover">
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                )}
                                </div>
                            ))}
                        </div>
                    ) : null
                )}

                {/* postlink */}
                <div className="flex items-center gap-20 ml-13 mt-4 mb-1 text-md text-white/30">
                    <div className="flex items-center gap-1 transition-colors duration-300 hover:text-violet-600">
                        <FaRegComment className="w-5 h-5" />
                        <p className="text-xs">{commentCount}</p>
                    </div>

                    <div className="flex items-center gap-1 transition-colors duration-300 hover:text-red-600">
                        <VscHeart className="w-5 h-5" />
                        <p className="text-xs">{likeCount}</p>
                    </div>

                    <div className="flex items-center gap-1 transition-colors duration-300 hover:text-violet-600">
                        <BiBarChart className="w-5 h-5" />
                        <p className="text-xs">{viewCount}</p>
                    </div>

                    <div className="flex items-center transition-colors duration-300 hover:text-violet-600">
                        <RiShare2Fill className="w-5 h-5" />
                    </div>
                </div>

        </div>
    )
}

export default Post;