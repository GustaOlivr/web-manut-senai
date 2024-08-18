"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Part } from "./types";
import { DetailEntityModal } from "@/components/details-entity-modal";
import { EditPartModal } from "@/components/edit-part-modal";
import { DeletePartConfirmation } from "@/components/delete-part-modal";

export const columns: ColumnDef<Part>[] = [
  {
    accessorKey: "part_id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "supplier",
    header: "Fornecedor",
  },
  {
    accessorKey: "quantity_stock",
    header: "Qtd. estoque",
  },
  {
    accessorKey: "unit_value",
    header: "Valor unit.",
    cell: ({ getValue }) => {
      const value = getValue<number>();
      return `R$ ${value.toFixed(2)}`;
    },
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <DetailEntityModal part={row.original} />
        <EditPartModal part={row.original} onSubmit={(data) => console.log("Edit", data)} />
        <DeletePartConfirmation part={row.original} onConfirm={() => console.log("Delete", row.original.part_id)} />
      </div>
    )
  },
];
