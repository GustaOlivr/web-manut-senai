// src/app/Clients/page.tsx
"use client"; // Adicione esta linha

import React from "react";
import { DataTable } from "@/components/ui/data-table";
import { Part } from "./types";
import { columns } from "./columns";
import { partData } from "@/data/partData";
import { RegisterPartForm } from "@/components/form-part";
import { RegisterEntryModal } from "@/components/register-entry-modal";
import { ReportPartModal } from "@/components/report-part-modal";

async function getData(): Promise<Part[]> {
  // Fetch data from your API here.
  return partData;
}

export default function Clients() {
  const [data, setData] = React.useState<Part[]>([]);

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
            Estoque de peças
          </h1>
          <div className="container mx-auto flex flex-col gap-4">
            <div className="w-full">
              <DataTable columns={columns} data={data} />
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <RegisterEntryModal />
              <ReportPartModal />
              <RegisterPartForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}