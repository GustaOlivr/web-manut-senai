"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Title } from "./title";

// Esquema de validação do formulário para Part
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  supplier: z.string().min(1, { message: "Supplier is required" }),
  quantity_stock: z.number().min(0, { message: "Quantity must be non-negative" }),
  unit_value: z.number().min(0, { message: "Value must be non-negative" }),
});

// Função para lidar com o envio do formulário
function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values); // Aqui, os valores do formulário são exibidos no console após a submissão
}

// Componente do formulário de registro de peças
export function RegisterPartForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", // Valor padrão para o nome
      supplier: "", // Valor padrão para o fornecedor
      quantity_stock: 0, // Valor padrão para a quantidade em estoque
      unit_value: 0, // Valor padrão para o valor unitário
    },
  });

  return (
    <div className="h-auto overflow-y-auto p-10 w-auto rounded-lg bg-muted">
      <Title text="Cadastro de Peça"></Title>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Peça</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome da peça" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="supplier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fornecedor</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do fornecedor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity_stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade inicial no estoque</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Digite a quantidade em estoque" 
                    {...field} 
                    onChange={(e) => field.onChange(parseInt(e.target.value, 10))} // Converte string para número
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unit_value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor Unitário</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Digite o valor unitário" 
                    {...field} 
                    onChange={(e) => field.onChange(parseFloat(e.target.value))} // Converte string para número
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Salvar</Button>
        </form>
      </Form>
    </div>
  );
}
