import { useEffect, useState } from "react";
import styles from "./cards-lista.module.css"
import { verificarAutenticacao } from "@/src/utils/auth";
import { listarPatrimonio } from "@/src/pages/api/patrimonioService";

type ListaProps = {
    page?: string;
};

type Patrimonio =
{
    patrimonioID: string,
    denominacao: string,
    numeroPatrimonio: string,
    valor: number,
    localizacaoID: string,
    statusPatrimonioID: string,
}

const Lista = ({ page }: ListaProps) => {

    const [patrimonios, setPatrimonios] = useState<Patrimonio[]>([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [ordenacao, setOrdenacao] = useState("");
    const [pesquisa, setPesquisa] = useState("");
    const estaLogado = verificarAutenticacao();
    const cardsPorPagina = 3;

    async function carregarPatrimonios()
    {
        try
        {
            const lista = await listarPatrimonio();
            setPatrimonios(lista);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    
    const patrimoniosFiltrados = patrimonios.filter((patrimonio) =>
        patrimonio.denominacao
            .toLowerCase()
            .includes(pesquisa.toLowerCase())
    );

    const patrimoniosOrdenados = [...patrimoniosFiltrados];

    const indiceInicial = (paginaAtual - 1) * cardsPorPagina;
    const indiceFinal = indiceInicial + cardsPorPagina;
    const patrimoniosPaginados = patrimoniosOrdenados.slice(indiceInicial, indiceFinal);
    const totalPaginas = Math.ceil(patrimoniosOrdenados.length / cardsPorPagina);

    function proximaPagina()
    {
        if (paginaAtual < totalPaginas)
        {
            setPaginaAtual(paginaAtual + 1);
        }
    }

    function paginaAnterior()
    {
        if (paginaAtual > 1)
        {
            setPaginaAtual(paginaAtual - 1);
        }
    }

    useEffect(() => {
        carregarPatrimonios();
        setPaginaAtual(1);
    }, [pesquisa]);

    return (
        <>
            {page === "ambientes" && (
                <section className={`${styles.table_section} ${styles.layout_guide}`} aria-label="Lista de ambientes">
                        <table className={styles.environment_table}>
                            <thead>
                                <tr>
                                    <th>Local</th>
                                    <th>Responsável</th>
                                    <th>Detalhes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td>Sala 30/31 (anfiteatro)</td>
                                    <td>Samanta Melissa</td>
                                    <td>
                                        <a href="#" aria-label="Ver detalhes da Sala 30/31">
                                            <i className="fa-solid fa-circle-info" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </section>
            )}

            {page === "patrimonios" && (
                <section className={`${styles.table_section} ${styles.layout_guide}`} aria-label="Lista de patrimonios">
                    <table className={styles.environment_table}>
                        <thead>
                            <tr>
                                <th>Patrimônio</th>
                                <th>Denominação</th>
                                <th>Tipo</th>
                                <th>Data transfêrencia</th>
                                <th>Detalhes</th>
                                <th>Transferir</th>
                            </tr>
                        </thead>

                        <tbody>
                            {patrimoniosPaginados.map((patrimonio) => (    
                                <tr key={patrimonio.patrimonioID}>
                                    <td>{patrimonio.numeroPatrimonio}</td>
                                    <td>{patrimonio.denominacao}</td>
                                    <td>{patrimonio.statusPatrimonioID}</td>
                                    <td>-/-/-</td>

                                    <td>
                                        <a href="#" aria-label="Ver detalhes do patrimonio">
                                            <i className="fa-solid fa-circle-info" />
                                        </a>
                                    </td>

                                    <td>
                                        <a href="#" aria-label="Transferir patrimonio">
                                            <i className="fa-solid fa-arrow-right-arrow-left" />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}

            {page === "detalhes" && (
                <section className={`${styles.table_section} ${styles.layout_guide}`} aria-label="Lista de histórico do patrimônio">
                    <h2>Histórico</h2>
                    <table className={styles.history_table}>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Tipo de movimentação</th>
                                <th>Origem</th>
                                <th>Destino</th>
                                <th>Responsável</th>
                                <th>Justificativa</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td data-label="Data">11/02/2026</td>
                                <td data-label="Tipo de movimentação">
                                    <span className={styles.status_badge}>
                                        Transferência
                                    </span>
                                </td>

                                <td data-label="Origem">Sala 07/08</td>
                                <td data-label="Destino">Sala 09/10</td>
                                <td data-label="Responsável">Gustavo Lima</td>

                                <td data-label="Justificativa">
                                    <a href="#" aria-label="Ver justificativa da transferência">
                                        <i className="fa-solid fa-circle-info" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            )}

            <nav className={styles.pagination} aria-label="Paginação">
                <button type="button" className={styles.pagination_button}
                aria-label="Página anterior" onClick={paginaAnterior}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>

                {totalPaginas > 0 &&
                    Array.from({ length: totalPaginas }, (_, index) => (
                        <button key={index} type="button" onClick={() => setPaginaAtual(index + 1)}
                        className={paginaAtual === index + 1 ? `${styles.pagination_link} ${styles.current}` : styles.pagination_link}>
                        {index + 1}</button>
                    ))
                }
                
                <button type="button" className={styles.pagination_button}
                aria-label="Próxima página" onClick={proximaPagina}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </nav>
        </>
    )
}

export default Lista;