import { render } from "react-dom";

import styles from '../styles/components/CompletedChalenges.module.css';

export function CompletedChalenges() {
    return (
        <div className={styles.CompletedChalengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}