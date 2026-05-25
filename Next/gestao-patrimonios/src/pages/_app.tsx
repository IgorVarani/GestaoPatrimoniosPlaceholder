import "@/src/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps)
{
    return (
        <main className={`${montserrat.variable}`}>
            <Component {...pageProps} />
        </main>
    );
}