"use client"; // Adicione esta linha

import React from "react";
import { Aside } from "@/components/aside";
import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { FaGear } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { columns } from "../clients/columns";
import { Client } from "../clients/types";
import { DataTable } from "@/components/ui/data-table";
import { clientData } from "@/data/clientDetailData";

async function getData(): Promise<Client[]> {
  // Fetch data from your API here.
  return clientData

}

export default function Clients() {
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

  const [data, setData] = React.useState<Client[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col overflow-y-auto w-full">
      <div className="flex-1 flex">
        <main className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Clientes
          </h1>

          <div className="container mx-auto py-5">
            <DataTable columns={columns} data={data} />
          </div>
        </main>
      </div>
    </div>
  );
}
