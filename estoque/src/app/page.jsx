import { supabase } from "@/lib/supabase/client";
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
  const data = await getData();

  const setNewView = async () => {
    const { data, error } = await supabase.from("Estoque").insert({
      produto: "teste",
      ean: 234345345,
      categoria: "teste",
      quantidade: 32,
      preco_compra: 10.99,
      margem_lucro: 30,
      preco_venda: 16.47
    })
  };

  setNewView();

  return (
    <div>
      <div className="flex justify-end my-2">
        <AppDrawer />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
