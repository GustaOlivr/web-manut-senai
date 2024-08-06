import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motorcycleTypes } from "@/app/motos/types";

export function SelectMotorcycleTypes() {
    return (
      <Select>
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