"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Motorcycle } from "../app/motos/types"; // Certifique-se de ter um arquivo types.ts com o tipo Motorcycle definido
import React from "react";
import { Maintenance } from "@/app/manutencoes/columns";
import { PartCard } from "./part-card";
import { MotorcycleHistory } from "./motorcycle_history_detail";

type ModalMotorcycleDetailsProps = {
  maintanence: Maintenance;
  motorcycle: Motorcycle;
};

export function ModalMotorcycleDetails({ maintanence, motorcycle}: ModalMotorcycleDetailsProps) {
  return (
    <div>
      <div  className="flex">
        <div>
          <p><strong>ID:</strong> {maintanence.id}</p>
          <p><strong>Tipo:</strong> {maintanence.moto}</p>
          <p><strong>Modelo:</strong> {maintanence.status}</p>
        </div>
        <div className="pl-20">
          <MotorcycleHistory motorcycle={motorcycle} />
        </div>
      </div>
      <div>
        <h3 className="text-lg mt-4 pb-4">Peças Utilizadas:</h3>
        {maintanence.pecas.length > 0 ? (
          <div className="grid grid-cols-4 gap-4 p-4">
            {maintanence.pecas.map((props, index) => (
              <PartCard
                key={index}
                codigo={props.codigo}
                nome={props.nome}
                qtd_consumida={index + 1}
                valor_unitario={props.valor_unitario}
                fornecedor={props.fornecedor}
              />
            ))}
          </div>
        ) : (
          <p>Nenhuma peça utilizada nesta manutenção.</p>
        )}
      </div>
    </div>
  );
}
