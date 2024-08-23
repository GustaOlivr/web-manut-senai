"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { TimePeriod, ReportType, PartCategory, ReportFormat, DataGrouping, DataFilter } from "@/app/parts/types";

export function ReportPartModal() {
  const [formData, setFormData] = useState({
    timePeriod: "" as TimePeriod,
    reportType: "" as ReportType,
    partCategory: "" as PartCategory,
    reportFormat: "" as ReportFormat,
    dataGrouping: "" as DataGrouping,
    dataFilter: "" as DataFilter,
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (field: keyof typeof formData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Aqui você pode enviar o formData para um servidor ou processá-lo conforme necessário
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-muted text-primary h-10 px-4 py-2 rounded-md text-sm font-medium mb-4 mx-2">
        Gerar relatório
      </DialogTrigger>
      <DialogContent className="h-[75vh] overflow-y-auto p-4">
        <DialogHeader>
          <DialogTitle>Configure o relatório que gostaria de obter</DialogTitle>
          <DialogDescription>Preencha as informações abaixo para gerar o relatório de peças</DialogDescription>
        </DialogHeader>

        <div className="grid w-full items-center gap-4">
          <Label htmlFor="timePeriod">Período de Tempo</Label>
          <Select onValueChange={(value) => handleSelectChange("timePeriod", value)}>
            <SelectTrigger id="timePeriod">
              <SelectValue placeholder="Selecione o período de tempo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last_week">Última semana</SelectItem>
              <SelectItem value="last_30_days">Últimos 30 dias</SelectItem>
              <SelectItem value="last_6_months">Últimos 6 meses</SelectItem>
              <SelectItem value="last_year">Último ano</SelectItem>
            </SelectContent>
          </Select>

          <Label htmlFor="reportType">Tipo de Relatório</Label>
          <Select onValueChange={(value) => handleSelectChange("reportType", value)}>
            <SelectTrigger id="reportType">
              <SelectValue placeholder="Selecione o tipo de relatório" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="most_sold">Peças mais vendidas</SelectItem>
              <SelectItem value="highest_stock">Peças com maior estoque</SelectItem>
              <SelectItem value="out_of_stock">Peças em falta</SelectItem>
              <SelectItem value="most_profitable">Peças mais rentáveis</SelectItem>
              <SelectItem value="highest_rotation">Peças com maior rotação</SelectItem>
            </SelectContent>
          </Select>

          <Label htmlFor="partCategory">Categoria de Peças</Label>
          <Select onValueChange={(value) => handleSelectChange("partCategory", value)}>
            <SelectTrigger id="partCategory">
              <SelectValue placeholder="Selecione a categoria de peças" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engine">Motor</SelectItem>
              <SelectItem value="brakes">Freios</SelectItem>
              <SelectItem value="suspension">Suspensão</SelectItem>
              <SelectItem value="electrical">Elétrica</SelectItem>
              <SelectItem value="accessories">Acessórios</SelectItem>
            </SelectContent>
          </Select>

          <Label htmlFor="reportFormat">Formato do Relatório</Label>
          <Select onValueChange={(value) => handleSelectChange("reportFormat", value)}>
            <SelectTrigger id="reportFormat">
              <SelectValue placeholder="Selecione o formato do relatório" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="excel">Excel</SelectItem>
              <SelectItem value="csv">CSV</SelectItem>
            </SelectContent>
          </Select>

          <Label htmlFor="dataGrouping">Agrupamento de Dados</Label>
          <Select onValueChange={(value) => handleSelectChange("dataGrouping", value)}>
            <SelectTrigger id="dataGrouping">
              <SelectValue placeholder="Selecione o agrupamento de dados" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="by_category">Por categoria</SelectItem>
              <SelectItem value="by_brand">Por marca</SelectItem>
              <SelectItem value="by_supplier">Por fornecedor</SelectItem>
              <SelectItem value="by_price_range">Por faixa de preço</SelectItem>
            </SelectContent>
          </Select>

          <Label htmlFor="dataFilter">Filtro de Dados</Label>
          <Select onValueChange={(value) => handleSelectChange("dataFilter", value)}>
            <SelectTrigger id="dataFilter">
              <SelectValue placeholder="Selecione o filtro de dados" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available_only">Apenas peças disponíveis</SelectItem>
              <SelectItem value="include_out_of_stock">Incluir peças em falta</SelectItem>
              <SelectItem value="filter_by_supplier">Filtrar por fornecedor específico</SelectItem>
              <SelectItem value="below_min_stock">Peças abaixo do estoque mínimo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-center mt-4">
          <Button onClick={handleSubmit} className="text-muted-foreground bg-muted w-1/2">
            Gerar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
