import Lista from "@/src/components/cards-lista/cards-lista";
import styles from "./detalhes.module.css";
import Header from "@/src/components/header/header";

const Detalhes = () => {
    return (
        <>
            <Header />
            <main className={styles.page_content}>
                <Lista page="detalhes-cima" />
                <Lista page="detalhes-baixo" />
            </main>
        </>
    );
};

export default Detalhes;