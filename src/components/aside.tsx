import Image from "next/image";
import { NavBar } from "./navbar";
import { NavFooter } from "./nav-footer";

export function Aside() {
    return (
        <aside className="w-64 p-6 flex flex-col">
            <Image src={"/image/logo-oficina2.png"} className="w-full" alt="Logo" width={240} height={240} />
            <NavBar />
            <div className="mt-auto">
                <NavFooter />
            </div>
        </aside>
    );
}