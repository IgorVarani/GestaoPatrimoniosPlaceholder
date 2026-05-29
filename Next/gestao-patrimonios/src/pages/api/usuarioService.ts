import { api } from "./api";

export async function listarPorId(id: number) {
    try {
        const response = await api.get("Usuario/" + id);
        return response;
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}