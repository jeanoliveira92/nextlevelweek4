import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/19362678?s=460&u=8a3bf151d47b7fcee49f87b0ad6ed99c94a4fb10&v=4" alt="Jean Carlos" className="" />
            <div>
                <strong>Jean Carlos</strong>
                <p>
                    <img src="icons/level.svg" alt="level" className=""/> 
                    Level 1
                    </p>
            </div>
        </div>
    )
}