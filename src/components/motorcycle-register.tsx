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
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { SelectMotorcycleTypes } from "./select-motorcycle-types";

export function ModalMotorcycleRegister() {
  return (
    <Dialog>
      <DialogTrigger className="bg-muted text-primary h-10 px-4 py-2 rounded-md text-sm font-medium">Cadastrar Moto</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registre uma nova Moto</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="grid w-full items-center gap-2.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
            
            <Label>Tipo</Label>
            <SelectMotorcycleTypes></SelectMotorcycleTypes>
        </div>
        
      </DialogContent>
    </Dialog>
  );
}
