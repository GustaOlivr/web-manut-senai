"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Motorcycle = {
  id: string
  tipo: "Custom" | "Esportiva" | "Street" | "Scooter" | "Off-Road"
  modelo: string
  data_fabricacao:  string
  numero_serie: string
  proprietario: string //substitui o campo de localização dos critérios
}

export const columns: ColumnDef<Motorcycle>[] = [
  {
    accessorKey: "id",
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
    accessorKey: "data_fabricacao",
    header: "Data de Fabricação",
  },
  {
    accessorKey: "numero_serie",
    header: "Número de Série",
  },
  {
    accessorKey: "proprietario",
    header: "Proprietário",
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
