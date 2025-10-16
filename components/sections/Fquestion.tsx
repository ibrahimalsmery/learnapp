"use client";

import React from "react";

function Fquestion(props: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <div className=" rounded-[5px] w-full fqa-card-border">
                <div className="flex justify-between p-[10px] items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <p className="semibold-24">{props.question} </p>
                    <p className="text-[60px] ">{isOpen ? "⬆️" : "⬇️"}</p>
                </div>
                {isOpen && (
                    <div className="p-[10px]">
                        <p className="semibold-20">{props.answer}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Fquestion;