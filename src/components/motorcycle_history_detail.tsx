import React from "react";
import { Motorcycle } from "@/app/motos/types";

type MotorcycleHistoryProps = {
  motorcycle: Motorcycle;
};

export const MotorcycleHistory: React.FC<MotorcycleHistoryProps> = ({ motorcycle }) => {
  return (
    <div>
      <h3 className="font-semibold pb-1">Histórico de Manutenção: </h3>
      {motorcycle.historico_manutencao.length === 0 ? (
        <p>Sem histórico de manutenção.</p>
      ) : (
        <ul className="inline-block space-y-2">
          {motorcycle.historico_manutencao.map((item, index) => (
            <li key={index} className="p-0.5 bg-muted-foreground rounded-sm">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
