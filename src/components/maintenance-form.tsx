

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { RegisterMaintenanceForm } from "./form-main"

  export function ModalMaintenanceForm() {
return(
<Dialog>
    <DialogTrigger className="bg-muted text-primary h-10 px-4 py-2 rounded-md text-sm font-medium">Cadastrar manutenção</DialogTrigger>
    <DialogContent>
        <DialogHeader>
        <DialogTitle>Cadastro de manutenção</DialogTitle>
        <DialogDescription>
            Preencha com os campos para criar registrar uma nova manutenção
        </DialogDescription>
        </DialogHeader>
        <RegisterMaintenanceForm/>
    </DialogContent>
</Dialog>
  
)}