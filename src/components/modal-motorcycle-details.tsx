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

type ModalMotorcycleDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  motorcycle: Motorcycle;
};

export function ModalMotorcycleDetails({ isOpen, onClose, motorcycle }: ModalMotorcycleDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes da Moto</DialogTitle>
          <DialogDescription>
            Informações sobre {motorcycle.modelo} de {motorcycle.proprietario}
          </DialogDescription>
        </DialogHeader>
        <div>
          <p><strong>ID:</strong> {motorcycle.id}</p>
          <p><strong>Tipo:</strong> {motorcycle.tipo}</p>
          <p><strong>Modelo:</strong> {motorcycle.modelo}</p>
          <p><strong>Data de Fabricação:</strong> {motorcycle.data_fabricacao}</p>
          <p><strong>Número de Série:</strong> {motorcycle.numero_serie}</p>
          <p><strong>Proprietário:</strong> {motorcycle.proprietario}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
