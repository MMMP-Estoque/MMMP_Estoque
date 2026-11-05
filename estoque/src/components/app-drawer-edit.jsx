"use client"

import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Ellipsis } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldDescription
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function AppDrawerEdit() {
    const [open, setOpen] = React.useState(false)
    const isMobile = useIsMobile()

    function handleConfirm() {

    }

    return (
        <Drawer open={open} onOpenChange={setOpen} showSwipeHandle={isMobile} swipeDirection={isMobile ? "down" : "right"}>
            <DrawerTrigger asChild>
                <Button variant="ghost" className="mx-8">
                    <Ellipsis />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Editar produto</DrawerTitle>
                    <DrawerDescription>Leite integral 1L</DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 scroll-fade overflow-y-auto p-4">
                    <form className="w-full max-w-sm">
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="form-ean">EAN</FieldLabel>
                                <Input
                                    id="form-ean"
                                    type="text"
                                    placeholder="Digite o código EAN"
                                    value="7891000100103"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="form-price">Preço Unitário</FieldLabel>
                                <Input id="form-price" type="text" placeholder="R$ 0,00" value="6,49" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="form-profit">Acréscimo no preço (%)</FieldLabel>
                                <Input id="form-profit" type="number" placeholder="0" value="30" />
                                <FieldDescription>
                                    O percentual é aplicado sobre o preço unitário.
                                </FieldDescription>
                            </Field>
                            <Button onClick={handleConfirm} className="h-[34px] w-full">Salvar alterações</Button>
                    <DrawerClose asChild>
                        <Button variant="outline" className="w-full">Cancelar</Button>
                    </DrawerClose>
                        </FieldGroup>
                    </form>
                </div>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="destructive" className="w-full">Deletar produto</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}