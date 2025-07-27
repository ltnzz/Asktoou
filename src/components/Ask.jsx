import { useState } from "react";
import AskModal from "./AskModal";
import coba from "../assets/coba.png"

const user = {
    name: "Bone",
    avatar: coba,
};

const TimeLine = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [questions, setQuestions] = useState([]);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const handleSubmitQuestion = (q) => {
        setQuestions((prev) => [...prev, { id: Date.now(), text: q }]);
    };

    return (
    <div className="bg-slate-900/80 absolute left-60 p-4 space-y-6 w-[630px] h-[100px] ml-4 rounded-2xl mt-4">
        <div className="flex items-center gap-4">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full"/>
            <div
                onClick={handleOpenModal}
                className="cursor-pointer border px-3 py-3 p-4 w-full rounded-full text-gray-500 "
            >
                Ada yang ingin kamu tanyakan?
            </div>
        </div>

        <AskModal
            isOpen={modalOpen}
            onClose={handleCloseModal}
            onSubmit={handleSubmitQuestion}
        />

        <div className="space-y-4">
            {questions.map((q) => (
            <div key={q.id} className="p-4 border rounded shadow">
                {q.text}
            </div>
            ))}
        </div>
    </div>
    );
};

export default TimeLine;
