import styles from './CampoTexto.module.css';
import { useState } from 'react';

export default function CampoTexto (props) {
    // setValor === é utilizado para escrever
    // valor === é utilizado para ler
    
    // const [valor, setValor] = useState('lurian');

    const aoDigitado = (evento) => {
        // setValor(evento.target.value);
        // console.log(valor);

        props.aoAlterado(evento.target.value);
    }
    
    return (
        <div className={styles.campo_texto}>
            <label>{props.label}</label>
            <input value={props.valor} required = {props.obrigatorio} onChange={aoDigitado} type={props.type} placeholder={props.placeholder}/>
        </div>
    );
}
