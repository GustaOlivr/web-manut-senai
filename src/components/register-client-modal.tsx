import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RegisterClientForm } from "./form-client"

export function RegisterClientModal() {
  return (
    <Dialog>
      <DialogTrigger className="mt-2">
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="">
        <RegisterClientForm></RegisterClientForm>
      </DialogContent>
    </Dialog>
  )
}
