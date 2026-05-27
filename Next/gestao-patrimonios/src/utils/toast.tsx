import { toast, ToastOptions } from "react-toastify";
import styles from "./toast.module.css";

const config: ToastOptions =
{
    className: styles.toast,
};

export const sucesso = ( msg: string, callback?: () => void ) => { toast.success(msg, { ...config, onClose: callback }); };

export const erro = (msg: string) => { toast.error(msg, config); };