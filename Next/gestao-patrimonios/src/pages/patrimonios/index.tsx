import Lista from "@/src/components/cards-lista/cards-lista";
import styles from "./patrimonios.module.css";
import Header from "@/src/components/header/header";

const Patrimonios = () => {
    return (
        <>
            <Header />

            <main className={styles.page_content}>

                <section
                    className={`${styles.page_header} ${styles.layout_guide}`}
                    aria-labelledby="titulo-patrimonios"
                >
                    <h1 id={styles.titulo_patrimonios}>
                        Patrimônios: Sala 09/10
                    </h1>

                    <form className={styles.search_area} role="search">
                        <label htmlFor="pesquisa-ambiente" className={styles.sr_only}>
                            Pesquisar patrimônios
                        </label>

                        <input
                            type="search"
                            id="pesquisa-ambiente"
                            name="pesquisaAmbiente"
                            placeholder="Pesquise o ambiente"
                        />

                        <button type="button" className={styles.add_button} aria-label="Adicionar patrimônios">
                            <i className="fa-solid fa-plus" /> Patrimônio
                        </button>

                        <button
                            type="button"
                            className={styles.filter_button}
                            aria-label="Filtrar patrimonios"
                        >
                            <i className="fa-solid fa-sliders" />
                        </button>
                    </form>
                </section>

                <Lista page="patrimonios" />

                <nav className={styles.pagination} aria-label="Paginação">

                    <button
                        type="button"
                        className={styles.pagination_button}
                        aria-label="Página anterior"
                    >
                        ‹
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

                    <button
                        type="button"
                        className={styles.pagination_button}
                        aria-label="Próxima página"
                    >
                        ›
                    </button>
                </nav>

            </main>
        </>
    );
};

export default Patrimonios;