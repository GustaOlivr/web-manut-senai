export type Motorcycle = {
  moto_id: string;
  tipo: MotorcycleType;
  modelo: string;
  data_fabricacao: string;
  numero_serie: string;
  proprietario: string;
};

export const motorcycleTypes = [
  "Custom",
  "Esportiva",
  "Street",
  "Scooter",
  "Off-Road"
] as const;

export type MotorcycleType = typeof motorcycleTypes[number];