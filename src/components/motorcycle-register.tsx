"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MotorcycleType } from "../app/motos/types"; // Certifique-se de ter um arquivo types.ts com o tipo MotorcycleType definido
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { SelectMotorcycleTypes } from "./select-motorcycle-types";
import { Button } from "./ui/button";

export function ModalMotorcycleRegister() {
  const [formData, setFormData] = useState({
    email: "",
    tipo: "" as MotorcycleType,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (value: MotorcycleType) => {
    setFormData((prevData) => ({
      ...prevData,
      tipo: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Aqui você pode enviar o formData para um servidor ou processá-lo conforme necessário
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-muted text-primary h-10 px-4 py-2 rounded-md text-sm font-medium">
        Cadastrar Moto
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registre uma nova Moto</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />

          <Label>Tipo</Label>
          <SelectMotorcycleTypes selectedTipo={formData.tipo} onTipoChange={handleSelectChange} />
        </div>
        <div className="flex items-center justify-center">
        <Button onClick={handleSubmit}  className="text-muted-foreground bg-muted w-1/2">Registrar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}