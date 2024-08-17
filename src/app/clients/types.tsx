import { Motorcycle } from "../motos/types";

export type Client = {
    client_id: string;
    cpf: string;
    name: string;
    gender: string;
    date_birth: string;
    motorcycles: Motorcycle[];
  };
  