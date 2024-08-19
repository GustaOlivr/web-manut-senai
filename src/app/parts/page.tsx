// src/app/Clients/page.tsx
"use client"; // Adicione esta linha

import React from "react";
import { DataTable } from "@/components/ui/data-table";
import { Part } from "./types";
import { columns } from "./columns";
import { partData } from "@/data/partData";
import { RegisterPartForm } from "@/components/form-part";
import { Button } from "@/components/ui/button";
import { RegisterEntryModal } from "@/components/register-entry-modal";

async function getData(): Promise<Part[]> {
  // Fetch data from your API here.
  return partData;
}

export default function Clients() {
  const [data, setData] = React.useState<Part[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col overflow-y-auto w-full py-10">
      <div className="flex-1 flex">
        <main className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Estoque de peças
          </h1>
          <div className="container mx-auto flex gap-4">
            <div className="w-7/12">
              <DataTable columns={columns} data={data} />
            </div>
            <div className="w-5/12">
              <RegisterPartForm />
              <Button onClick={handleOpenModal} className="mt-4">
                Registrar Entrada/Saída
              </Button>
            </div>
          </div>
        </main>
      </div>
      <RegisterEntryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
