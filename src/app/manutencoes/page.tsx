"use client"; // Adicione esta linha

import React from "react";
import { Maintenance, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { MaintenanceForm } from "@/components/maintenance-form";

async function getData(): Promise<Maintenance[]> {
  // Fetch data from your API here.
  return [
    {
        id: "ds231we",
        moto: "MT-07-2015",
        prioridade: 1,
        status: "Pendente",
        responsavel: "Gabriel",
        data: "10/12/2024",
      },
      {
        id: "rr41we",
        moto: "Cb-250-2015",
        prioridade: 2,
        status: "Em progresso",
        responsavel: "Rui",
        data: "14/12/2024",
      },
      {
        id: "sw81te",
        moto: "Fazer-250-2017",
        prioridade: 2,
        status: "Finalizada",
        responsavel: "Rogerio",
        data: "14/12/2024",
      },
      {
        id: "gs2ksk",
        moto: "Factor-160-2012",
        prioridade: 3,
        status: "Finalizada",
        responsavel: "Rui",
        data: "14/12/2024",
      },
    // ...
  ];
}

export default function Manutencoes() {

  const [data, setData] = React.useState<Maintenance[]>([]);

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
            Manutenções 
          </h1>

          <div className="container mx-auto py-5">
            <DataTable columns={columns} data={data} />
            <div className="flex justify-end mt-4">
                {/* <Button variant={"muted"}>Cadastrar manutenção</Button> */}
                <MaintenanceForm></MaintenanceForm>
            </div>
          </div>


        </main>
      </div>
    </div>
  );
}
