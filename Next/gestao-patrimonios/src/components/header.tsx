import styles from "./header.module.css"

const Header = () => {
    return (
        <header className={styles.topbar}>
            <nav className={`${styles.navbar} ${styles.layout_guide}`} aria-label="Menu principal">
                <a href="#" className={styles["logo-link"]} aria-label="Página inicial">
                    <img
                        src="../imgs/logo.svg"
                        alt="Logo SENAI"
                        className={styles.logo}
                    />
                </a>

                <ul className={styles["menu-list"]}>
                    <li>
                        <a href="#" className={styles["menu-link"]}>
                            Ambientes
                            <i className="fa-solid fa-chevron-down" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles["menu-link"]}>
                            Patrimônios
                        </a>
                    </li>
                </ul>

                <section className={styles["user-area"]} aria-label="Informações do usuário">
                    <button className={styles["user-icon"]} aria-label="Abrir perfil do usuário">
                        <i className="fa-solid fa-user" />
                    </button>

                    <div className={styles["user-info"]}>
                        <strong>Késsia Milena</strong>
                        <span>kessia@sp.senai.br</span>
                    </div>

                    <button className={styles["arrow-button"]} aria-label="Abrir opções da conta">
                        <i className="fa-solid fa-chevron-down" />
                    </button>
                </section>

                <button className={styles.hamburguer} aria-label="Abrir opções de menu">
                    <i className="fa-solid fa-bars" />
                </button>
            </nav>
        </header>
    );
};

export default Header;