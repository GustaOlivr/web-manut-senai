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
import { TimePeriod, ReportType, Team, ReportFormat } from "@/app/manutencoes/types"

export function MaintenanceReportModal() {
  const [formData, setFormData] = useState({
    timePeriod: "" as TimePeriod,
    reportType: "" as ReportType,
    team: "" as Team,
    reportFormat: "" as ReportFormat,
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
        Gerar relatório de manutenção
      </DialogTrigger>
      <DialogContent className="h-[75vh] overflow-y-auto p-4">
        <DialogHeader>
          <DialogTitle>Configure o relatório de manutenção</DialogTitle>
          <DialogDescription>Preencha as informações abaixo para gerar o relatório de manutenção</DialogDescription>
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

          <Label htmlFor="reportType">Tipo de Manutenção</Label>
          <Select onValueChange={(value) => handleSelectChange("reportType", value)}>
            <SelectTrigger id="reportType">
              <SelectValue placeholder="Selecione o tipo de manutenção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="preventive">Preventiva</SelectItem>
              <SelectItem value="corrective">Corretiva</SelectItem>
              <SelectItem value="predictive">Preditiva</SelectItem>
            </SelectContent>
          </Select>

          <Label htmlFor="team">Equipe</Label>
          <Select onValueChange={(value) => handleSelectChange("team", value)}>
            <SelectTrigger id="team">
              <SelectValue placeholder="Selecione a equipe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Alpha">Alpha</SelectItem>
              <SelectItem value="Omega">Omega</SelectItem>
              <SelectItem value="Lambda">Lambda</SelectItem>
              <SelectItem value="All">Todos</SelectItem>
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