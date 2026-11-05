import { columns } from "./columns"
import { DataTable } from "./data-table"
import { AppDrawer } from "@/components/app-drawer"

async function getData() {
  return [
    {
      nome: "Leite Integral 1L",
      ean: 7891000100103,
      categoria: "Laticínios",
      quantidade: 48,
      compra: "R$6,49",
      lucro: "30%",
      venda: "R$8,44",
    },
    {
      nome: "Leite Integral 1L",
      ean: 7891000100103,
      categoria: "Laticínios",
      quantidade: 48,
      compra: "R$6,49",
      lucro: "30%",
      venda: "R$8,44",
    },
    {
      nome: "Leite Integral 1L",
      ean: 7891000100103,
      categoria: "Laticínios",
      quantidade: 48,
      compra: "R$6,49",
      lucro: "30%",
      venda: "R$8,44",
    },
    {
      nome: "Leite Integral 1L",
      ean: 7891000100103,
      categoria: "Laticínios",
      quantidade: 48,
      compra: "R$6,49",
      lucro: "30%",
      venda: "R$8,44",
    },
  ]
}

export default async function Home() {
  const data = await getData()

  return (
    <div>
      <div className="flex justify-end my-2">
        <AppDrawer />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
