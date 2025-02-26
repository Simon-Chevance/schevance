import { useState } from "react";
import { Link } from "react-router";
import NeonTitle from "./NeonTitle.tsx";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="py-4 flex justify-between items-center bg-black">
            <div className="flex">
                <NeonTitle word="schevance" />
            </div>

            <button
                className="lg:hidden p-2 focus:outline-none text-white flex-row"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* Menu Desktop */}
            <ul className="hidden lg:flex flex-row space-x-6">
                {navLinks.map((nav) => {
                    const IconComponent = nav.icon;
                    return (
                        <li key={nav.id} className="hover:bg-[#00454c] p-2 rounded-lg transition duration-200">
                            <Link target={"_blank"} to={nav.path}>
                                <IconComponent width={28} height={28} />
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* Menu Mobile (affiché quand ouvert) */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 lg:hidden">
                    {navLinks.map((nav) => {
                        const IconComponent = nav.icon;
                        return (
                            <li key={nav.id} className="hover:bg-[#00454c] p-3 rounded-lg transition duration-200 w-full text-center">
                                <Link
                                    target={"_blank"}
                                    to={nav.path}
                                    className="flex items-center justify-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <IconComponent width={28} height={28} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
}
