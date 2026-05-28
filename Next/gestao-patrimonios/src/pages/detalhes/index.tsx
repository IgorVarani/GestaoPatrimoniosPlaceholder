import Lista from "@/src/components/cards-lista/cards-lista";
import styles from "./detalhes.module.css";
import Header from "@/src/components/header/header";

const Detalhes = () => {
    return (
        <>
            <Header />
            <main className={styles.page_content}>
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

                <Lista page="detalhes" />
            </main>
        </>
    );
};

export default Detalhes;