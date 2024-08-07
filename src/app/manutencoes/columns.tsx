"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Maintenance = {
  id: string
  moto: string
  prioridade: number
  status:  "Pendente" | "Em progresso" | "Finalizada" | "failed"
  responsavel: string
  data: string
  pecas: Peca[];
}

export type Peca = {
  nome: string;
  codigo: string;
  fornecedor: string;
  quantidade_estoque: number;
  valor_unitario: number;
}

export const columns: ColumnDef<Maintenance>[] = [
  {
    accessorKey: "moto",
    header: "Moto",
  },
  {
    accessorKey: "prioridade",
    header: "Prioridade",
  },
    {
    accessorKey: "status",
    header: "Status",
    cell: info => {
      const status = info.getValue() as string;
      let color = "text-gray-500";
      if (status === "Pendente") color = "text-yellow-500";
      else if (status === "Em progresso") color = "text-blue-500";
      else if (status === "Finalizada") color = "text-green-500";
      else if (status === "failed") color = "text-red-500";

      return <span className={color}>{status}</span>;
    }
  },
  {
    accessorKey: "responsavel",
    header: "Responsável",
  },
  {
    accessorKey: "data",
    header: "Data",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => (
      <Button >
        Ver Detalhes
      </Button>
    )
  }
];
