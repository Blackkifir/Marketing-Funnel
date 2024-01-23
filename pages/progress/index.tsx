import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PageMetadata from '../assets/PageMetadata';
import styles from '../scss/progress.module.scss';

export const metadata = {
  title: 'Progress',
};

export default function Progress() {
  const router = useRouter();

  const onClickContinue = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push('/marketingCenter');
  };

  return (
    <div>
      <PageMetadata title={metadata.title} />
      <div>
        <Header />
        <main className={styles.main}>
          <div className={styles.progressContainer}>
            <div className={styles.flexBlock}>
              <h2 className={styles.flexBlock__title}>
                See your Spiritual Growth progress by Sep 17, 2024
              </h2>
              <div className={styles.flexBlock__chart}>
                <div className={styles.flexBlock__chart__date}>
                  <p className={styles.flexBlock__chart__date__firstText}>Sep 17</p>
                  <p className={styles.flexBlock__chart__date__secondText}>2024</p>
                </div>
                <Image
                  className={styles.flexBlock__chart__vector}
                  src="/chart.svg"
                  alt="chart-img"
                  width={276}
                  height={240}
                />
                <div className={styles.flexBlock__chart__lineTop} />
                <div className={styles.flexBlock__chart__line} />
                <div className={styles.flexBlock__chart__line} />
                <div className={styles.flexBlock__chart__line} />
                <div className={styles.flexBlock__chart__line} />
                <div className={styles.flexBlock__chart__line} />
                <div className={styles.flexBlock__chart__blockNow}>
                  <p className={styles.flexBlock__chart__blockNow__text}>Now</p>
                </div>
              </div>
              <button onClick={onClickContinue} type="button" className={styles.continueBtn}>Continue</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
