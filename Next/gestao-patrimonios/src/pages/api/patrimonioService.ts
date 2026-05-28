import { api } from "./api";

type PatrimonioForm =
{
    patrimonioID: string,
    denominacao: string,
    numeroPatrimonio: string,
    valor: number,
    localizacaoID: string,
    statusPatrimonioID: string,
}

interface PatrimonioList
{
    patrimonioID: string,
    denominacao: string,
    numeroPatrimonio: string,
    valor: number,
    localizacaoID: string,
    statusPatrimonioID: string,
}

export async function listarPatrimonio()
{
    try
    {
        const response = await api.get("Patrimonio");

        const patrimoniosAtivos = response.data.filter
        (
            (patrimonio: PatrimonioList) => patrimonio.statusPatrimonioID === "1"
        );

        return patrimoniosAtivos;
    }
    catch(error: any)
    {
        throw new Error(error.response?.data || "Erro ao listar patrimônios");
    }
}

export async function listarPorId(id: number)
{
    try
    {
        const response = await api.get("Patrimonio/" + id);

        const jogo = {...response.data};

        return jogo;
    }
    catch(error: any)
    {
        throw new Error(error.response.data);
    }
}