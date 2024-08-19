// src/components/RegisterEntryModal.tsx
"use client"; // Adicione esta linha

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface RegisterEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterEntryModal: React.FC<RegisterEntryModalProps> = ({ isOpen, onClose }) => {
  const [type, setType] = useState<string>("Entrada");
  const [date, setDate] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const handleSave = () => {
    // Implementar a lógica para salvar os dados
    console.log({ type, date, quantity });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogHeader>
        <DialogTitle>Registrar Entrada e Saída de Peças</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <div className="space-y-4">
          <label htmlFor="type">Tipo:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-muted block w-full p-2 border border-muted-foreground rounded"
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
            <option value="Balanço">Balanço</option>
          </select>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Data"
          />
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            placeholder="Quantidade"
          />
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSave}>Salvar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
