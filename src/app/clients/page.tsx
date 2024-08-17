"use client"; // Adicione esta linha

import React from "react";
import { columns } from "../clients/columns";
import { Client } from "../clients/types";
import { DataTable } from "@/components/ui/data-table";
import { clientData } from "@/data/clientDetailData";
import { RegisterClientForm } from "@/components/form-client";
import { TitleTable } from "@/components/title-table";

async function getData(): Promise<Client[]> {
  // Fetch data from your API here.
  return clientData

}

export default function Clients() {

  const [data, setData] = React.useState<Client[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col overflow-y-auto w-full py-10">
      <div className="flex-1 flex">
        <main className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Clientes
          </h1>

          <div className="container mx-auto flex gap-4">
            <div className="w-7/12">
            <TitleTable text="Cadastros Recentes"></TitleTable>
              <DataTable columns={columns} data={data} />
            </div>
            <div className="w-5/12">
              <RegisterClientForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
