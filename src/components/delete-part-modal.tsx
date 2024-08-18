"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Part } from "@/app/parts/types";
import { RiDeleteBin7Fill } from "react-icons/ri";

interface DeletePartConfirmationProps {
  part: Part;
  onConfirm: () => void;
}

export function DeletePartConfirmation({ part, onConfirm }: DeletePartConfirmationProps) {
  return (
    <Dialog>
      <DialogTrigger className="bg-muted h-10 px-2 py-2 rounded-md text-sm font-medium">
        <RiDeleteBin7Fill color="red" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar Exclusão</DialogTitle>
        </DialogHeader>
        <div>
          <p>Tem certeza que deseja excluir a peça <strong>{part.name}</strong>?</p>
          <div className="mt-4 flex justify-end space-x-2">
            <Button variant="outline">Cancelar</Button>
            <Button variant="destructive" onClick={onConfirm}>Excluir</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
