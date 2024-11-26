import styles from "./MessageModal.styles.module.css";

export const MessageModal = ({closeModal}) => {
    
        return (
        <div className={`${styles.modal}`}>
            <p>La tarea se ingresó con éxito</p>
        </div>
    )
};

export default MessageModal;