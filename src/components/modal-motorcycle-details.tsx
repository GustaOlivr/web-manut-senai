"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Motorcycle } from "../app/motos/types"  // Certifique-se de ter um arquivo types.ts com o tipo Motorcycle definido
import React from "react";
import { Maintenance } from "@/app/manutencoes/columns";

type ModalMotorcycleDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  maintanence: Maintenance,
};

export function ModalMotorcycleDetails({ isOpen, onClose, maintanence }: ModalMotorcycleDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes da Moto</DialogTitle>
          <DialogDescription>
            Informações sobre a manutenção {maintanence.responsavel} de {maintanence.data}
          </DialogDescription>
        </DialogHeader>
        <div>
          <p><strong>ID:</strong> {maintanence.id}</p>
          <p><strong>Tipo:</strong> {maintanence.moto}</p>
          <p><strong>Modelo:</strong> {maintanence.status}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
