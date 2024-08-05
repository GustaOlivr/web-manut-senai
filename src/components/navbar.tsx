import { FaRegUserCircle} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FiBox, FiTool } from "react-icons/fi";
import { MdDashboard} from "react-icons/md";


export function NavBar() {

    const links = [
        {target: "#", text: "Dashboard", icon: <MdDashboard />},
        {target: "#", text: "Ambientes", icon: <FiBox />},
        {target: "#", text: "Equipamentos", icon: <FaGear />},
        {target: "#", text: "Manutenções", icon: <FiTool />},
        {target: "#", text: "Usuários", icon: <FaRegUserCircle />},
    ];

    return (
        <nav className="space-y-4 flex flex-col bg-muted rounded-lg p-8 mt-8">
            {links.map((obj,index) => (
                <a key={index} href={obj.target} className="flex items-center gap-4 text-secondary hover:font-semibold">
                    {obj.icon}
                    {obj.text}
                </a>
            ))}

            
        </nav>
    );
}