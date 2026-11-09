"use server";

import { supabase } from "@/lib/supabase/client";

export async function submitInventoryForm(formData) {
    const produto = formData.get("form-product");
    const ean = formData.get("form-ean");
    const categoria = formData.get("form-category");
    const quantidade = formData.get("form-quantity");
    const preco_compra = formData.get("form-price");
    const margem_lucro = formData.get("form-profit");
    const preco_venda = formData.get("form-sell");

    const insertData = async () => {
        const { data, error } = await supabase.from("Estoque").insert({
            produto: produto,
            ean: ean,
            categoria: categoria,
            quantidade: quantidade,
            preco_compra: preco_compra,
            margem_lucro: margem_lucro,
            preco_venda: preco_venda
        })

        if (data) console.log(data);
        if (error) console.log(error);
    }

    insertData();
}

export async function submitEditForm(formData) {
    // para pegar o id, precisa da lógica do read
    // const id = formData.get("id");
    const ean = formData.get("form-ean");
    const preco_compra = formData.get("form-price");
    const margem_lucro = formData.get("form-profit");

    /*

    const updateData = async () => {
        const { data, error } = await supabase.from("Estoque").update({
            ean: ean,
            preco_compra: preco_compra,
            margem_lucro: margem_lucro,
        }).eq("id", id);

        if (data) console.log(data);
        if (error) console.log(error);
    }

    updateData();

    */

    console.log(ean, preco_compra, margem_lucro);
}

export async function readData()
{
    const { data, error } = await supabase
            .from('Estoque')
            .select('*');
    
       
        if (error) {
            console.log('Erro ao buscar produtos:', error);
            return [];
        }
    
        return data;
    
}

export async function deleteData()
{
    // também depende da lógica do read para pegar o id
    console.log("onClick funcionou");
}
