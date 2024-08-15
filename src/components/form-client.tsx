"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Motorcycle } from "@/app/motos/types";

// Definição do esquema de validação usando zod para o tipo Client
export type Client = {
  client_id: string; // ID do cliente
  cpf: string; // CPF do cliente
  name: string; // Nome do cliente
  gender: string; // Gênero do cliente
  date_birth: string; // Data de nascimento do cliente
  motorcycles: Motorcycle[]; // Lista de motos associadas ao cliente
};

// Esquema de validação do formulário
const formSchema = z.object({
  client_id: z.string(), // Campo obrigatório para o ID do cliente
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "Invalid CPF format" }), // Validação do CPF no formato correto
  name: z.string().min(1, { message: "Name is required" }), // Validação para garantir que o nome não esteja vazio
  gender: z.enum(["Masculino", "Feminino", "Old Spice Lenhador", "Bitcoin", "Troglodita" ]), // Campo para selecionar o gênero, limitado às opções Masculino e Feminino
  date_birth: z.string().regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, { message: "Date must be in the format dd/mm/yyyy" }), // Validação da data de nascimento no formato dd/mm/yyyy
  motorcycles: z.array(z.object({ // Estrutura de validação para a lista de motos associadas ao cliente
    moto_id: z.string(),
    tipo: z.string(),
    modelo: z.string(),
    data_fabricacao: z.string(),
    numero_serie: z.string(),
    proprietario: z.string(),
    historico_manutencao: z.array(z.string()),
  })),
});

// Função para lidar com o envio do formulário
function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values); // Aqui, os valores do formulário são exibidos no console após a submissão
}

// Componente do formulário de registro de cliente
export function RegisterClientForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      client_id: "", // Valor padrão para o ID do cliente
      cpf: "", // Valor padrão para o CPF
      name: "", // Valor padrão para o nome
      gender: "Masculino", // Valor padrão para o gênero
      date_birth: "", // Valor padrão para a data de nascimento
      motorcycles: [], // Valor padrão para a lista de motos (inicialmente vazia)
    },
  });

  return (
    <div className="h-full overflow-y-auto pl-10 w-2/3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o CPF (000.000.000-00)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gênero</FormLabel>
                <FormControl>
                  <select {...field} className="border rounded p-2 ml-4">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Old Spice Lenhador">Old Spice Lenhador</option>
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="Troglodita">Troglodita</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date_birth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data de Nascimento</FormLabel>
                <FormControl>
                  <Input placeholder="dd/mm/yyyy" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="motorcycles"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Motos</FormLabel>
                <FormDescription>
                  Vou fazer um campo manipulável para registrar motos talvez ou listar as placas de motos cadastradas no sistema.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
