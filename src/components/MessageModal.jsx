import styles from "./MessageModal.styles.module.css";

export const MessageModal = () => {
    
        return (
        <div className={`${styles.modal}`}>            
            <p>La tarea se ingresó con éxito!</p>
            <p className={`${styles.messageNote}`}>Redirigiendo a página principal...</p>            
        </div>
    )
};

export default MessageModal;