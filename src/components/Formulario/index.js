import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import styles from './Formulario.module.css'
import { useState } from 'react';


export default function Formulario (props) {
    const times = [
        'Programação',
        'Front-End', 
        'Data Science', 
        'Devops', 
        'UX e Design', 
        'Mobile', 
        'Inovação e Gestão'
    ]; 

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    const funcaoSalvar = (evento) => {
        evento.preventDefault();

        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={funcaoSalvar}>
                <h2>Prencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label={'Nome'} 
                    type={'text'} 
                    placeholder={'Digite seu nome'}
                    valor = {nome}
                    aoAlterado={valor => setNome(valor)}
                />
                
                <CampoTexto 
                    obrigatorio={true} 
                    label={'Cargo'} 
                    type={'text'} 
                    placeholder={'Digite seu cargo'}
                    valor = {cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                
                <CampoTexto 
                    label={'Imagem'} 
                    type={'text'} 
                    placeholder={'Informe o endereço da imagem'}
                    valor = {imagem}                    
                    aoAlterado={valor => setImagem(valor)}
                />
                
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens={times} 
                    label="Selecione seu time"
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}