import styles from './Time.module.css';

export default function Time (props) {
    
    return (
        <section className={styles.time}>
            <h3>{props.nome}</h3>
        </section>      
    );
} 