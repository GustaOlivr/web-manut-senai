"use client";

import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Motorcycle } from "../types";
import { ModalMotorcycleRegister } from "@/components/motorcycle-register";
import { Maintenance } from "@/app/manutencoes/columns";
import { MaintenanceDetailCard } from "@/components/maintenance-detail-card";
import { ModalMotorcycleDetails } from "@/components/modal-motorcycle-details";
import { maintenanceDetail } from "@/data/maintenanceDetailData";
import { motorcycleDetail } from "@/data/motorcycleDetailData";

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
        pecas: [
          {
            nome: "Filtro de Óleo",
            codigo: "FO123",
            fornecedor: "Yamaha",
            quantidade_estoque: 10,
            valor_unitario: 50.0,
          },
          {
            nome: "Bateria",
            codigo: "BT101",
            fornecedor: "Heliar",
            quantidade_estoque: 7,
            valor_unitario: 200.0,
          },
        ]
      },
      {
        id: "rr41we",
        moto: "Fazer YS 250",
        prioridade: 2,
        status: "Finalizada",
        responsavel: "Rui",
        data: "14/06/2024",
        pecas: [
          {
            nome: "Filtro de Óleo",
            codigo: "FO123",
            fornecedor: "Yamaha",
            quantidade_estoque: 10,
            valor_unitario: 50.0,
          },
          {
            nome: "Pneu Traseiro",
            codigo: "PT456",
            fornecedor: "Pirelli",
            quantidade_estoque: 5,
            valor_unitario: 300.0,
          },
        ]
      },
      {
        id: "sw81te",
        moto: "Fazer YS 250",
        prioridade: 2,
        status: "Finalizada",
        responsavel: "Rogerio",
        data: "05/01/2024",
        pecas: [
          {
            nome: "Vela de Ignição",
            codigo: "VI789",
            fornecedor: "NGK",
            quantidade_estoque: 20,
            valor_unitario: 25.0,
          },
        ]
      },
      {
        id: "gs2ksk",
        moto: "Fazer YS 250",
        prioridade: 3,
        status: "Finalizada",
        responsavel: "Rui",
        data: "09/11/2023",
        pecas: [
          {
            nome: "Bateria",
            codigo: "BT101",
            fornecedor: "Heliar",
            quantidade_estoque: 7,
            valor_unitario: 200.0,
          },
        ]
      },
    // ...
  ];
}

export default function ProfileDetails({ params }: Props) {
  const [data, setData] = React.useState<Maintenance[]>([]);
  const { moto_id } = params;

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
                  <ModalMotorcycleDetails maintanence={maintenanceDetail} motorcycle={motorcycleDetail}></ModalMotorcycleDetails>
        </main>
      </div>
    </div>
  );
}