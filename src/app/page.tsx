"use client"; // Adicione esta linha

import React from "react";
import { Aside } from "@/components/aside";
import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { FaGear } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { DataTable } from "../components/ui/data-table";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "452kkdiw1",
//       amount: 100,
//       status: "processing",
//       email: "admin@example.com",
//     },
//     {
//       id: "452kkdiw1",
//       amount: 100,
//       status: "processing",
//       email: "admin@example.com",
//     },
//     {
//       id: "452kkdiw1",
//       amount: 100,
//       status: "processing",
//       email: "admin@example.com",
//     },
//     {
//       id: "452kkdiw1",
//       amount: 100,
//       status: "processing",
//       email: "admin@example.com",
//     },
//     // ...
//   ];
// }

export default function Home() {
  const cards = [
    { qty: "10", text: "Ambientes", icon: <FiBox size={40} /> },
    { qty: "78", text: "Equipamentos", icon: <FaGear size={40} /> },
    { qty: "22", text: "O.S. Abertas", icon: <GrNotes size={40} /> },
    {
      qty: "93",
      text: "O.S. Concluídas",
      icon: <IoMdCheckboxOutline size={40} />,
    },
  ];

  // const [data, setData] = React.useState<Payment[]>([]);

  // React.useEffect(() => {
  //   async function fetchData() {
  //     const result = await getData();
  //     setData(result);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="flex flex-col overflow-y-auto w-full">
      <div className="flex-1 flex">
        <main className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Sistema de Gestão de Manutenção
          </h1>

          <div className="grid grid-cols-4 gap-4 p-4">
            {cards.map((props) => (
              <Card
                key={props.text} // Adicionei uma chave única aqui para evitar avisos do React.
                qty={props.qty}
                text={props.text}
                icon={props.icon}
              />
            ))}
          </div>

          {/* <div className="container mx-auto py-5">
            <DataTable columns={columns} data={data} />
          </div> */}
        </main>
      </div>
    </div>
  );
}
