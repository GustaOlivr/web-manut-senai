import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motorcycleTypes, MotorcycleType } from "@/app/motos/types";

interface SelectMotorcycleTypesProps {
  selectedTipo: MotorcycleType;
  onTipoChange: (value: MotorcycleType) => void;
}

export function SelectMotorcycleTypes({ selectedTipo, onTipoChange }: SelectMotorcycleTypesProps) {
  return (
    <Select onValueChange={onTipoChange} value={selectedTipo}>
      <SelectTrigger className="Tipo de Moto">
        <SelectValue placeholder="Selecione o tipo da moto" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tipo da Moto</SelectLabel>
          {motorcycleTypes.map((tipo) => (
            <SelectItem key={tipo} value={tipo}>
              {tipo}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
