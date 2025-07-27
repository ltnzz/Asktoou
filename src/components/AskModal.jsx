import { useState } from "react";
import { IoClose } from "react-icons/io5";
import coba from "../assets/coba.png"

const user = {
    name: "Bone",
    avatar: coba,
};

const AskModal = ( {isOpen, onClose, onSubmit} ) => {
    const [question, setQuestion] = useState("");

    const handleSubmit = () => {
        if (!question.trim()) return;
        onSubmit(question);
        setQuestion("");
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-violet-500/20 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-black/90 w-full max-w-xl mb-[180px] p-3 rounded-lg shadow-lg transform scale-95 opacity-90 transition-all duration-300 ease-in-out animate-[fadeIn_0.3s_ease-out_forwards]" onClick={(e) => e.stopPropagation()}>
                <IoClose 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500 cursor-pointer transition duration-200"
                />
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 ml-5 rounded-full"/>
                        <textarea
                            rows={3}
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="w-full p-3 ml-3 mt-1.5 resize-none border-none outline-none text-white max-h-[200px] placeholder-white"
                            placeholder="Apa yang anda pikirkan?"
                            />
                <div className="w-full border-b-2 border-white/40 mt-1 p-2"></div>
            <div className="flex justify-end gap-2 mt-3">
                <button
                onClick={handleSubmit}
                className="px-4 py-1 rounded-full bg-violet-400 text-white hover:bg-violet-500 cursor-pointer mr-2"
                >
                Posting
                </button>
            </div>
        </div>
    </div>
    )
}

export default AskModal;