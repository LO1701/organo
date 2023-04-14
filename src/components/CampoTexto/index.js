import styles from './CampoTexto.module.css'

export default function CampoTexto ({label, type, placeholder}) {
    return (
        <div className={styles.campo_texto}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder}/>
        </div>
    );
}
