import styles from "./cards-lista.module.css"

type ListaProps = {
    page?: string;
};

const Lista = ({ page }: ListaProps) => {

    const [jogos, setJogos] = useState<Jogo[]>([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [ordenacao, setOrdenacao] = useState("");
    const [pesquisa, setPesquisa] = useState("");
    const estaLogado = verificarAutenticacao();
    const cardsPorPagina = 3;

    const indiceInicial = (paginaAtual - 1) * jogosPorPagina;
    const indiceFinal = indiceInicial + jogosPorPagina;
    const jogosPaginados = jogosOrdenados.slice(indiceInicial, indiceFinal);
    const totalPaginas = Math.ceil(jogosOrdenados.length / jogosPorPagina);

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
                            <tr>
                                <td>1236808</td>
                                <td>MESA TRAPEZOIDAL DC-1987a</td>
                                <td>Mesa</td>
                                <td>11/02/26</td>

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
                <button type="button" className={styles.pagination_button} aria-label="Página anterior">
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <a href="#" className={`${styles.pagination_link} ${styles.current}`} aria-current="page">
                    1
                </a>
                <a href="#" className={styles.pagination_link}>
                    2
                </a>
                <a href="#" className={styles.pagination_link}>
                    3
                </a>
                <button type="button" className={styles.pagination_button} aria-label="Próxima página">
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </nav>
        </>
    )
}

export default Lista;