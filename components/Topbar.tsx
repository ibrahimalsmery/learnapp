"use client";
import { CircleX, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

function Topbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const links = [
        { href: "/", label: "الرئيسية" },
        { href: "/", label: "عن المنصة" },
        { href: "/", label: "منهجية التعليم" },
        { href: "/", label: "تسجيل الدخول", type: "button" },
    ]
    return (
        <>
            {/* toolbar */}
            <div className="flex justify-between items-center   h-[198px] py-[10px] px-[50px]" >
                <div className="">
                    <img src="/figma/simsim/main/opensimsim.png" alt="logo" className="w-[117px] h-[175px]" />
                </div>
                <div className="hidden md:flex gap-[39px] justify-start items-center">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={link.type === "button" ? "bg-[var(--color-primary)] text-white rounded-[200px]  w-[175px] h-[44px] flex items-center justify-center" : ""}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <Menu onClick={() => {
                    setIsOpen(!isOpen)
                    console.log(isOpen);

                }} className="block md:hidden text-[var(--color-primary)] cursor-pointer hover:text-white hover:bg-[var(--color-primary)] rounded-3xl p-3" size={70} />
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden  top-[0px] h-screen fixed right-0 w-full bg-white text-black p-5 border-t border-gray-200 shadow-lg`}>
                    <div className="flex flex-col gap-5">
                        <CircleX onClick={() => setIsOpen(false)} size={40} className="text-red-600 cursor-pointer" />
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={link.type === "button" ? "bg-[var(--color-primary)] text-white rounded-[200px]  w-[175px] h-[44px] flex items-center justify-center" : ""}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Topbar;