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
import { deleteData, submitEditForm } from "@/actions/actions"

export function AppDrawerEdit() {
    const [open, setOpen] = React.useState(false)
    const isMobile = useIsMobile()

    return (
        <Drawer open={open} onOpenChange={setOpen} showSwipeHandle={isMobile} swipeDirection={isMobile ? "down" : "right"}>
            <DrawerTrigger asChild>
                <Button variant="ghost" className="mx-8">
                    <Ellipsis />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <form className="w-full max-w-sm" action={submitEditForm}>
                    <DrawerHeader>
                        <DrawerTitle>Editar produto</DrawerTitle>
                        <DrawerDescription>Leite integral 1L</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex-1 scroll-fade overflow-y-auto p-4">
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="form-ean">EAN</FieldLabel>
                                <Input
                                    id="form-ean"
                                    name="form-ean"
                                    type="number"
                                    placeholder="Digite o código EAN"
                                    defaultValue="7891000100103"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="form-price">Preço Unitário</FieldLabel>
                                <Input 
                                id="form-price" 
                                name="form-price"
                                type="number" 
                                step="0.01"
                                placeholder="0.0" 
                                defaultValue="8.44" 
                                required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="form-profit">Acréscimo no preço (%)</FieldLabel>
                                <Input 
                                id="form-profit" 
                                name="form-profit"
                                type="number" 
                                placeholder="0" 
                                defaultValue="30" 
                                required
                                />
                                <FieldDescription>
                                    O percentual é aplicado sobre o preço unitário.
                                </FieldDescription>
                            </Field>
                            <Button type="submit" className="h-[34px] w-full">Salvar alterações</Button>
                            <DrawerClose asChild>
                                <Button variant="outline" className="w-full">Cancelar</Button>
                            </DrawerClose>
                        </FieldGroup>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button onClick={deleteData} variant="destructive" className="w-full">Deletar produto</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </form>
            </DrawerContent>
        </Drawer>
    )
}