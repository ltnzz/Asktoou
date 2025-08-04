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

    const handleSubmitQuestion = (question) => {
        console.log("Pertanyaan dikirim:", question);
        alert("Pertanyaan dikirim: " + question);
        setQuestions((prev) => [...prev, { id: Date.now(), text: question }]);
    };

    return (
    <div className="bg-slate-900/80 absolute inset-x-0 mx-auto p-4 space-y-6 w-[520px] h-[75px] ml-64 rounded-2xl mt-17">
        <div className="flex items-center gap-4">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full"/>
            <div
                onClick={handleOpenModal}
                className="cursor-pointer border px-2.5 py-2.5 p-4 w-full rounded-full text-gray-500 text-sm"
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
            {questions.map((question) => (
            <div key={question.id} className="p-4 border rounded shadow">
                {question.text}
            </div>
            ))}
        </div>
    </div>
    );
};

export default TimeLine;