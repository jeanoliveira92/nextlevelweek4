import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { ChallengesContext } from '../contexts/ChallengesContext';

interface ContdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

export const CountdownContext = createContext({} as ContdownContextData);

interface CoutndownProviderProps {
    children: ReactNode
}

let countDownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CoutndownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function resetCountDown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setHasFinished(false);
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
            startNewChallenge();
        }
    }, [isActive, time])

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountdownContext.Provider>

    )
}