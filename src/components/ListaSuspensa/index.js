import styles from "./ListaSuspensa.module.css"

export default function ListaSuspensa (props) {
    return(
        <div className={styles.campo_select}>
            <label>{props.label}</label>
            <select required = {props.obrigatorio}>
                <option data-default disabled selected>Selecione um time</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}