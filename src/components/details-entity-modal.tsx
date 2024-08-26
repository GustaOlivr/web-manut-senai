"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Part } from "@/app/parts/types";

interface DetailEntityModalProps {
  part: Part;
}

export function DetailEntityModal({ part }: DetailEntityModalProps) {
  return (
    <Dialog>
      <DialogTrigger className="bg-muted text-primary px-4 py-2 rounded-md text-sm font-medium">
        Detalhes
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes da Peça</DialogTitle>
          <DialogDescription>
            <p><strong>ID:</strong> {part.part_id}</p>
            <p><strong>Nome:</strong> {part.name}</p>
            <p><strong>Fornecedor:</strong> {part.supplier}</p>
            <p><strong>Quantidade em Estoque:</strong> {part.quantity_stock}</p>
            <p><strong>Valor Unitário:</strong> R$ {part.unit_value.toFixed(2)}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
