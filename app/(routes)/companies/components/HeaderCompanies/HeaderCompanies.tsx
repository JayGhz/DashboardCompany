"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { FormCreateCustomer } from "../FormCreateCustomer";


export function HeaderCompanies() {
  const [openModalCreate, setOpenModalCreate] = useState(false)
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl">List of companies</h2>

      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button>Add Company</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle> Add Customer</DialogTitle>
            <DialogDescription>
              Create and configure your Customer
            </DialogDescription>
          </DialogHeader>
          <FormCreateCustomer />
        </DialogContent>
      </Dialog>
    </div>
  )
}
