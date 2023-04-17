import styles from './CampoTexto.module.css'

export default function CampoTexto ({obrigatorio, label, type, placeholder}) {
    return (
        <div className={styles.campo_texto}>
            <label>{label}</label>
            <input required = {obrigatorio} type={type} placeholder={placeholder}/>
        </div>
    );
}
