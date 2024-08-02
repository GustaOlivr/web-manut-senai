import { FaRegUserCircle} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FiBox, FiTool } from "react-icons/fi";
import { MdDashboard} from "react-icons/md";
import Link from "next/link";

export function NavBar() {

    const links = [
        {target: "/", text: "Dashboard", icon: <MdDashboard className="text-muted-foreground"/>},
        {target: "#", text: "Ambientes", icon: <FiBox className="text-muted-foreground"/>},
        {target: "#", text: "Equipamentos", icon: <FaGear className="text-muted-foreground"/>},
        {target: "/manutencoes", text: "Manutenções", icon: <FiTool className="text-muted-foreground"/>},
        {target: "#", text: "Usuários", icon: <FaRegUserCircle className="text-muted-foreground"/>},
    ];

    return (
        <nav className="space-y-4 flex flex-col bg-muted rounded-lg p-8 mt-8">
            {links.map((obj,index) => (
                <a key={index} href={obj.target} className="flex items-center gap-4 text-secondary-foreground hover:font-semibold">
                    {obj.icon}
                    {obj.text}
                </a>
            ))}

            
        </nav>
    );
}