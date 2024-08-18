"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Part } from "./types";
import { DetailEntityModal } from "@/components/details-entity-modal";
import { EditPartModal } from "@/components/edit-part-modal";
import { DeleteConfirmation } from "@/components/delete-part-modal";

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
    cell: ({ row }) => {
      const part = row.original;

      const handleDelete = () => {
        // Lógica para excluir o item
        console.log("Delete", part.part_id);
      };

      return (
        <div className="flex space-x-2">
          <DetailEntityModal part={part} />
          <EditPartModal part={part} onSubmit={(data) => console.log("Edit", data)} />
          <DeleteConfirmation
            itemName={part.name}
            onConfirm={handleDelete}
          />
        </div>
      );
    }
  },
];
