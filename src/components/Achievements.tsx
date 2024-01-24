import styles from './scss/Achievements.module.scss';

export default function Achievements() {
  return (
    <section className={styles.achievementsContainer}>
      <h2 className={styles.achievementsFlexBlock__title}>
        People just like you achieved great results with App!
      </h2>
      <div className={styles.achievementsFlexBlock}>
        <div className={styles.achievementsFlexBlock__item}>
          <span className={styles.achievementsFlexBlock__percent}>71%</span>
          <p className={styles.achievementsFlexBlock__text}>
            of users were able to feel the power of prayer after just 6 weeks
          </p>
        </div>
        <div className={styles.achievementsFlexBlock__item}>
          <span className={styles.achievementsFlexBlock__percent}>65%</span>
          <p className={styles.achievementsFlexBlock__text}>
            of users started to have a meaningful daily routine and peaceful mind
          </p>
        </div>
        <div className={styles.achievementsFlexBlock__item}>
          <span className={styles.achievementsFlexBlock__percent}>47%</span>
          <p className={styles.achievementsFlexBlock__text}>
            of users struggled with finding time for daily praying
          </p>
        </div>
      </div>
    </section>
  );
}
