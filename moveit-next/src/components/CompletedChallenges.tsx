import { useContext } from "react";
import { render } from "react-dom";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from '../styles/components/CompletedChalenges.module.css';

export function CompletedChalenges() {
    const { challengesCompleted } = useContext(ChallengesContext);


    return (
        <div className={styles.CompletedChalengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}