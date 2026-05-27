import styles from "./cards-lista.module.css"

type ListaProps = {
    page?: string;
};

const Lista = ({ page }: ListaProps) => {
    
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

            {page === "detalhes-cima" && (
                <section className={`${styles.page_detalhes} ${styles.layout_guide}`} aria-labelledby="titulo-patrimonio">
                        <a href="#"className={styles.back_link}>
                            <i className="fa-solid fa-arrow-left" />Voltar
                        </a>

                        <h1 id={styles.titulo_patrimonio}>Patrimônio: 1236808</h1>

                        <article className={styles.patrimonio_card}>
                            <div className={styles.patrimonio_content}>

                                <dl>
                                    <dt>Denominação</dt>
                                    <dd>NOTEBOOK ALTO DESEMPENHO P/ GAMER</dd>
                                </dl>

                                <dl>
                                    <dt>Tipo</dt>
                                    <dd>Mesa</dd>
                                </dl>

                                <dl>
                                    <dt>Data transferência</dt>
                                    <dd><time dateTime="2026-02-09">09/02/2026</time></dd>
                                </dl>

                                <dl>
                                    <dt>Local Atual</dt>
                                    <dd>Sala 09/10</dd>
                                </dl>

                                <dl>
                                    <dt>Status Atual</dt>
                                    <dd>Ativo</dd>
                                </dl>
                            </div>
                        </article>
                </section>
            )}

            {page === "detalhes-baixo" && (
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
        </>
    )
}

export default Lista;