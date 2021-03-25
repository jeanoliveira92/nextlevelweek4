import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countDownTimeout: NodeJS.Timeout;

export function Countdown() {

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minLeft, minRight] = String(minutes).padStart(2, '0').split('');
    const [secLeft, secRight] = String(seconds).padStart(2, '0').split('');

    function resetCountDown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);

    }

    function startCountDown() {
        setIsActive(true);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            console.log("FINALIZOU");
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.CountdownContainer}>
                <div>
                    <span>{minLeft}</span>
                    <span>{minRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secLeft}</span>
                    <span>{secRight}</span>
                </div>
            </div>
            {
                hasFinished ? (
                    <button disabled className={styles.countdownButton}>
                        Ciclo encerrado
                    </button>
                ) : (
                    <>
                        {
                            isActive ?
                                (
                                    <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountDown}>
                                        Abandonar ciclo
                                    </button>
                                ) : (
                                    <button type="button" className={styles.countdownButton} onClick={startCountDown}>
                                        Iniciar um ciclo
                                    </button>
                                )
                        }
                    </>
                )
            }


        </div >
    );
}