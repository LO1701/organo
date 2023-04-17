import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import styles from './Formulario.module.css'

export default function Formulario () {
    const times = [
        'Programação',
        'Front-End', 
        'Data Science', 
        'Devops', 
        'UX e Design', 
        'Mobile', 
        'Inovação e Gestão'
    ]; 

    const funcaoSalvar = (evento) => {
        evento.preventDefault();
        console.log(evento);

    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={funcaoSalvar}>
                <h2>Prencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label={'Nome'} type={'text'} placeholder={'Digite seu nome'}/>
                <CampoTexto obrigatorio={true} label={'Cargo'} type={'text'} placeholder={'Digite seu cargo'}/>
                <CampoTexto label={'Imagem'} type={'text'} placeholder={'Informe o endereço da imagem'}/>
                <ListaSuspensa obrigatorio={true} itens={times} label="Selecione seu time"/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}
