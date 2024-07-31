"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-4" variant="outline">
          <h1 className="text-primary">Tema</h1>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dracula-dark")}>
            Dracula-Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("discord-dark")}>
            Discord-Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("oficina")}>
            Oficina
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
