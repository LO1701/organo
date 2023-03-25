import styles from './CampoTexto.module.css'

export const CampoTexto = ({label, type, placeholder}) => {
    return (
        <div className={styles.divExterna}>
            <label className={styles.labelInput}>{label}</label>
            <input type={type} placeholder={placeholder}/>
        </div>
    );
}