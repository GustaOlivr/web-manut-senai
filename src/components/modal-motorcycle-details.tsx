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
        <div>
          <h3 className="text-lg mt-4 pb-4">Peças Utilizadas:</h3>
          {maintanence.pecas.length > 0 ? (
            <ul className="list-disc">
              {maintanence.pecas.map((peca, index) => (
                <li key={index}>
                  <div className="pb-8">
                  <p className="text-muted-foreground"><strong>{peca.nome}</strong></p>
                  <p><strong>Código:</strong> {peca.codigo}</p>
                  <p><strong>Fornecedor:</strong> {peca.fornecedor}</p>
                  <p><strong>Valor Unitário:</strong> R$ {peca.valor_unitario.toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhuma peça utilizada nesta manutenção.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
