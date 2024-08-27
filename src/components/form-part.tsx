"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
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
  image: z
    .any()
    .refine((file) => file?.size > 0, { message: "Image is required" }), // Validação de imagem
});

// Função para lidar com o envio do formulário
function onSubmit(values: z.infer<typeof formSchema>) {
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("supplier", values.supplier);
  formData.append("quantity_stock", values.quantity_stock.toString());
  formData.append("unit_value", values.unit_value.toString());
  if (values.image) {
    formData.append("image", values.image[0]); // Adiciona a imagem ao FormData
  }

  console.log(formData); // Aqui, o FormData é exibido no console após a submissão
}

// Componente do formulário de registro de peças
export function RegisterPartForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", 
      supplier: "", 
      quantity_stock: 0, 
      unit_value: 0, 
      image: null,
    },
  });

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-muted text-primary px-4 py-2 rounded-md text-sm font-medium mb-4 hover:bg-muted">Registrar Peça</Button>
      </DialogTrigger>
      <DialogContent className="p-2">
        <DialogHeader>
          <DialogTitle>Cadastro de Peça</DialogTitle>
        </DialogHeader>
        <div className="p-10 bg-muted rounded-lg">
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
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imagem do produto</FormLabel>
                    <FormControl>
                      <Input 
                        type="file" 
                        accept="image/*" 
                        {...field} 
                        onChange={(e) => field.onChange(e.target.files)} // Captura o arquivo de imagem
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
      </DialogContent>
    </Dialog>
  );
}
