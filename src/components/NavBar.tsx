import NeonTitle from "./NeonTitle.tsx";

export default function NavBar() {

    return (
        <nav className="p-4 flex justify-between items-center bg-black bg-opacity-75">
            <div className="flex">
                <NeonTitle word="schevance" />
            </div>
            <div>
                <ul>
                    <li>Mail</li>
                    <li>Linkedin</li>
                    <li>Github</li>
                    <li>Bento</li>
                </ul>
            </div>
        </nav>
    );
}
