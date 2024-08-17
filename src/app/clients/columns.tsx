"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { Client } from "./types";

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "client_id",
    header: "ID",
  },
  {
    accessorKey: "cpf",
    header: "CPF",
  },
  {
    accessorKey: "gender",
    header: "Genêro"
  },
  {
    accessorKey: "date_birth",
    header: "Data de nascimento",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const router = useRouter();

      return (
        <Button onClick={() => router.push(`clients/client1`)}>
          Ver Detalhes
        </Button>
      );
    }
  }
];
