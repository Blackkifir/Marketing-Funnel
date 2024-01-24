import Image from 'next/image';
import styles from './scss/Features.module.scss';

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        <h2 className={styles.featuresFlexBlock__title}>What you get</h2>
        <div className={styles.featuresFlexBlock}>
          <div className={styles.featuresFlexBlock__item}>
            <Image
              src="/featuresIcon.svg"
              alt="features-icon"
              width={14}
              height={14}
              className={styles.featuresFlexBlock__icons}
            />
            <p className={styles.featuresFlexBlock__text}>
              ️You wake up feeling motivated and energized
            </p>
          </div>
          <div className={styles.featuresFlexBlock__item}>
            <Image
              src="/featuresIcon.svg"
              alt="features-icon"
              width={14}
              height={14}
              className={styles.featuresFlexBlock__icons}
            />
            <p className={styles.featuresFlexBlock__text}>
              You start your day in harmony with prayer
            </p>
          </div>
          <div className={styles.featuresFlexBlock__item}>
            <Image
              src="/featuresIcon.svg"
              alt="features-icon"
              width={14}
              height={14}
              className={styles.featuresFlexBlock__icons}
            />
            <p className={styles.featuresFlexBlock__text}>
              Your relationships are stronger than ever
            </p>
          </div>
          <div className={styles.featuresFlexBlock__item}>
            <Image
              src="/featuresIcon.svg"
              alt="features-icon"
              width={14}
              height={14}
              className={styles.featuresFlexBlock__icons}
            />
            <p className={styles.featuresFlexBlock__text}>
              You’re commited to spiritual growth and self-improvement
            </p>
          </div>
          <div className={styles.featuresFlexBlock__item}>
            <Image
              src="/featuresIcon.svg"
              alt="features-icon"
              width={14}
              height={14}
              className={styles.featuresFlexBlock__icons}
            />
            <p className={styles.featuresFlexBlock__text}>
              You grow closer to God through everyday Bible reading
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
