"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { Motorcycle } from "./types"; // Certifique-se de ter um arquivo types.ts com o tipo Motorcycle definido

export const columns: ColumnDef<Motorcycle>[] = [
  {
    accessorKey: "moto_id",
    header: "ID",
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
  },
  {
    accessorKey: "modelo",
    header: "Modelo"
  },
  {
    accessorKey: "proprietario",
    header: "Proprietário",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const router = useRouter();

      return (
        <Button onClick={() => router.push(`motos/fazer250`)}>
          Ver Detalhes
        </Button>
      );
    }
  }
];
