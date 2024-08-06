"use client";

import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Motorcycle } from "../types";
import { ModalMotorcycleRegister } from "@/components/motorcycle-register";
import { Maintenance } from "@/app/manutencoes/columns";

interface Props {
  params: { moto_id: string };
}

async function getData(): Promise<Maintenance[]> {
  // Fetch data from your API here.
  return [
    {
        id: "ds231we",
        moto: "Fazer YS 250",
        prioridade: 1,
        status: "Em progresso",
        responsavel: "Gabriel",
        data: "20/12/2024",
      },
      {
        id: "rr41we",
        moto: "Fazer YS 250",
        prioridade: 2,
        status: "Finalizada",
        responsavel: "Rui",
        data: "14/06/2024",
      },
      {
        id: "sw81te",
        moto: "Fazer YS 250",
        prioridade: 2,
        status: "Finalizada",
        responsavel: "Rogerio",
        data: "05/01/2024",
      },
      {
        id: "gs2ksk",
        moto: "Fazer YS 250",
        prioridade: 3,
        status: "Finalizada",
        responsavel: "Rui",
        data: "09/11/2023",
      },
    // ...
  ];
}

export default function ProfileDetails({ params }: Props) {
  const [data, setData] = React.useState<Maintenance[]>([]);
  const { moto_id } = params; // Destructure moto_id from params

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
          <h1 className="text-4xl font-bold w-full p-6 text-start">
            Detalhes da {moto_id} 
          </h1>

          <div className="container mx-auto py-5">
            <DataTable columns={columns} data={data} />
            <div className="flex justify-end mt-4">
                {/* <Button variant={"muted"}>Cadastrar manutenção</Button> */}
            </div>
          </div>


        </main>
      </div>
    </div>
  );
}