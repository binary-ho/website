import styles from "../index.module.css";

export const MoneyInput = () => {
    return (
        <div className={styles.moneyInputContainerWrapper}>
            <div className={styles.moneyInputContainer}>
                <input type="text" className={styles.moneyInput} placeholder="0" />
                <span className={styles.currencyUnitLabel}>만원</span>
            </div>
        </div>
    )
}