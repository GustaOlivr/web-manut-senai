"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Part } from "./types";
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
    header: "Fornecedor"
  },
  {
    accessorKey: "quantity_stock",
    header: "Qtd. estoque",
  },
  {
    accessorKey: "unit_value",
    header: "Valor unit.",
  },
];
