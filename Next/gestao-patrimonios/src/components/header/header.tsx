import { useEffect, useState } from "react";
import styles from "./header.module.css"
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";
import { Ojuju } from "next/font/google";
import { useRouter } from "next/router";
import { verificarAutenticacao } from "@/src/utils/auth";
import { logout } from "@/src/pages/api/authService";
import Link from "next/link";

type usuarioToken = {
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string,

    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string,

    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string,

    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string,

    "NIF": string,
}

const Header = () => {

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cargo, setCargo] = useState<string>("");
    const [estaLogado, setEstaLogado] = useState(false);
    const router = useRouter();

    async function getIdToken()
    {
        const token = secureLocalStorage.getItem("Token") as string;

        if(!token)
        {
            console.log("Token não encontrado.")
            return null;
        }
        try
        {
            const objToken = jwtDecode<usuarioToken>(token);
            console.log(objToken)

            const tokenUsuario =
            {
                id: objToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
                nome: objToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
                email: objToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
                cargo: objToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
                nif: objToken["NIF"]
            };

            setNome(tokenUsuario.nome);
            setEmail(tokenUsuario.email);
            setCargo(tokenUsuario.cargo);
        }
        catch(error: any)
        {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getIdToken();
        setEstaLogado(verificarAutenticacao());
    }, []);

    return (
        <header className={styles.topbar}>
            <nav className={`${styles.navbar} ${styles.layout_guide}`} aria-label="Menu principal">
                <a href="#" className={styles["logo-link"]} aria-label="Página inicial">
                    <img src="../imgs/logo.svg" alt="Logo SENAI" className={styles.logo}/>
                </a>

                <ul className={styles["menu-list"]}>
                    <li>
                        <Link href="/ambientes">
                            <p className={styles["menu-link"]}>Ambientes</p>
                        </Link>
                    </li>

                    <li>
                        <Link href="/aprovacoes">
                            <p className={styles["menu-link"]}>Aprovações</p>
                        </Link>
                    </li>

                    <li>
                        <Link href="/patrimonios">
                            <p className={styles["menu-link"]}>Patrimônios</p>
                        </Link>
                    </li>
                </ul>

                <section className={styles["user-area"]} aria-label="Informações do usuário">
                    <button className={styles["user-icon"]} aria-label="Abrir perfil do usuário"
                    onClick={() => {logout(); setEstaLogado(false); router.push("/login");}}>
                        <i className="fa-solid fa-user" />
                    </button>

                    <div className={styles["user-info"]}>
                        <strong>{nome}</strong>
                        <span>{email}</span>
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