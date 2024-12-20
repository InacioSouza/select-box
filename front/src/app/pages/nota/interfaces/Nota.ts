import { Cliente } from "src/app/pages/cliente/interfaces/Cliente";
import { Item } from "./Item";

export interface Nota{
    id: number,
    numero: string,
    data_emissao: Date,
    cliente: Cliente,
    itens: Item[],
    valorTotal: number
}