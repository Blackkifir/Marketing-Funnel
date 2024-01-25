import Image from 'next/image';
import styles from './scss/Rating.module.scss';
import ratingImg from './icons/rating.svg';

export default function Rating() {
  return (
    <section className={styles.ratingContainer}>
      <h2 className={styles.ratingFlexBlock__title}>Users love App!</h2>
      <div className={styles.ratingFlexBlock}>
        <div className={styles.ratingFlexBlock__wrapper}>
          <div className={styles.ratingFlexBlock__topItem}>
            <p className={styles.ratingFlexBlock__name}>Guadalupe Hudson</p>
            <Image
              src={ratingImg as string}
              alt="rating-stars"
              width={60}
              height={20}
            />
          </div>
          <div className={styles.ratingFlexBlock__bottomItem}>
            <p className={styles.ratingFlexBlock__date}>2 January 2024</p>
            <p className={styles.ratingFlexBlock__desc}>
              All I want to know if you are working on another agent A game or chapters. Loved this game!
            </p>
          </div>
        </div>
        <div className={styles.ratingFlexBlock__wrapper}>
          <div className={styles.ratingFlexBlock__topItem}>
            <p className={styles.ratingFlexBlock__name}>Bobby Wintheiser</p>
            <Image
              src={ratingImg as string}
              alt="rating-stars"
              width={60}
              height={20}
            />
          </div>
          <div className={styles.ratingFlexBlock__bottomItem}>
            <p className={styles.ratingFlexBlock__date}>27 December 2023</p>
            <p className={styles.ratingFlexBlock__desc}>
              I’ve played this over and over and I love it!
            </p>
          </div>
        </div>
        <div className={styles.ratingFlexBlock__wrapper}>
          <div className={styles.ratingFlexBlock__topItem}>
            <p className={styles.ratingFlexBlock__name}>Colleen Beahan</p>
            <Image
              src={ratingImg as string}
              alt="rating-stars"
              width={60}
              height={20}
            />
          </div>
          <div className={styles.ratingFlexBlock__bottomItem}>
            <p className={styles.ratingFlexBlock__date}>19 December 2023</p>
            <p className={styles.ratingFlexBlock__desc}>
              Soooo fun I recommend. Easy and fun I thought it was a little challenging but if it wasn’t it would...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
