"use client";

import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Motorcycle } from "./types";

export async function getData(): Promise<Motorcycle[]> {
  // Fetch data from your API here.
  return [
    {
        id: "df21fs",
        tipo: "Custom",
        modelo: "Harley-Davidson Street 750",
        data_fabricacao: "10-05-2018",
        numero_serie: "HDST7502018XYZ",
        proprietario: "Gabriel Santos"
      },
      {
        id: "h2k31s",
        tipo: "Esportiva",
        modelo: "Yamaha YZF-R3",
        data_fabricacao: "02-03-2020",
        numero_serie: "YYZR32020ABC",
        proprietario: "Mariana Lima"
      },
      {
        id: "kgk2s1",
        tipo: "Street",
        modelo: "Honda CB300R",
        data_fabricacao: "15-07-2019",
        numero_serie: "HCB300R2019QWE",
        proprietario: "Carlos Oliveira"
      },
      {
        id: "js6fa7s",
        tipo: "Scooter",
        modelo: "Vespa GTS 300",
        data_fabricacao: "05-11-2018",
        numero_serie: "VGTS3002021RTY",
        proprietario: "Julia Ferreira"
      },
    // ...
  ];
}

export default function Motos() {
  const [data, setData] = React.useState<Motorcycle[]>([]);

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
            Motos 
          </h1>
          <div className="container mx-auto py-5">
            <DataTable columns={columns} data={data} />
            <div className="flex justify-end mt-4">
              {/* <Button variant={"muted"}>Cadastrar manutenção</Button> */}
              {/* <ModalMaintenanceForm></ModalMaintenanceForm> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}