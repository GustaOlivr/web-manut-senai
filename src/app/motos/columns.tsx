"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import React, { useState } from "react";
import { Motorcycle } from "./types"; // Certifique-se de ter um arquivo types.ts com o tipo Motorcycle definido
import { ModalMotorcycleDetails } from "@/components/modal-motorcycle-details"; // Certifique-se de que o caminho esteja correto

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
    accessorKey: "proprietario",
    header: "Proprietário",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setIsOpen(true)}>Ver Detalhes</Button>
          <ModalMotorcycleDetails 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)} 
            motorcycle={row.original} 
          />
        </>
      );
    }
  }
];
