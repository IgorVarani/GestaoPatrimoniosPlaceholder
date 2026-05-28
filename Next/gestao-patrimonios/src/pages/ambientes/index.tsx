import Lista from "@/src/components/cards-lista/cards-lista";
import styles from "./ambientes.module.css";
import Header from "@/src/components/header/header"

const Ambientes = () => {
    return (
        <>
            <Header />
            <main className={styles.page_content}>
                <section className={`${styles.page_header} ${styles.layout_guide}`} aria-labelledby="titulo-ambientes">
                    <h1 id="titulo-ambientes">
                        Ambientes
                    </h1>
                    <form className={styles.search_area} role="search">
                        <label htmlFor="pesquisa-ambiente" className={styles.sr_only}>
                            Pesquisar ambiente
                        </label>
                        <input type="search" id="pesquisa-ambiente" name="pesquisaAmbiente" placeholder="Pesquise o ambiente" />
                        <button type="button" className={styles.filter_button} aria-label="Filtrar ambientes">
                            <i className="fa-solid fa-sliders" />
                        </button>
                    </form>
                </section>

                <Lista page="ambientes" />

            </main>
        </>
    );
};

export default Ambientes;