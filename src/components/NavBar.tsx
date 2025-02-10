import NeonTitle from "./NeonTitle.tsx";
import { navLinks } from '../constants';
import {Link} from "react-router";

export default function NavBar() {

    console.log({navLinks})
    return (
        <nav className="p-4 flex justify-between items-center">
            <div className="flex">
                <NeonTitle word="schevance" />
            </div>
            <div>
                <ul className="flex flex-row space-x-4">
                    {navLinks.map((nav) => (
                        <Link to={nav.path}>{nav.label}</Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
