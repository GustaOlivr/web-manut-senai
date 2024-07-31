import { Aside } from "@/components/aside";
import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { FaGear } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function Home() {
  const cards = [
    { qty:"10", text:"Ambientes", icon:<FiBox size={48} />},
    { qty:"78", text:"Equipamentos", icon:<FaGear size={48} />},
    { qty:"22", text:"O.S. Abertas", icon:<GrNotes size={48} />},
    { qty:"93", text:"O.S. Concluídas", icon:<IoMdCheckboxOutline size={48} />},
  ];
    
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        
        <Aside />

        <main className="flex-1 flex flex-col">

          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Sistema de Gestão de Manutenção</h1>

          <div>
            <div className="grid grid-cols-4 gap-4 p-6">
              
              {cards.map((props) => (
                <Card 
                    qty={props.qty}
                    text={props.text}
                    icon={props.icon}
                />
              ))}
         
            </div>
          </div>
        </main>

      </div>

      <Footer></Footer>
    </div>
  );
}