"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Button } from "@/components/ui/button";

export const RegisterEntryModal: React.FC = () => {
    const [type, setType] = useState<string>("Entrada");
    const [date, setDate] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);

  const handleSave = () => {
    // Implementar a lógica para salvar os dados
    console.log({ type, date, quantity });
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-muted text-primary px-4 py-2 rounded-md text-sm font-medium mb-4">
        Lançamentos
      </DialogTrigger>
      <DialogContent>
      <DialogHeader>
        <DialogTitle>Registrar lançamento no estoque</DialogTitle>
      </DialogHeader>
        <div>
          <label htmlFor="type">Tipo:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-muted block w-full p-2 border border-muted-foreground rounded mb-2"
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
            <option value="Balanço">Balanço</option>
          </select>
          <Label htmlFor="date">Data</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Data"
            className="mb-2"
          />
          <Label htmlFor="number">Quantidade</Label>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            placeholder="Quantidade"
          />
        </div>
        <div className="flex justify-end space-x-2 mt-4">
        <DialogClose asChild>
            <Button type="button">
              Cancelar
            </Button>
        </DialogClose>
        <DialogClose asChild>
            <Button type="button" onClick={handleSave}>
                Salvar
            </Button>
        </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
