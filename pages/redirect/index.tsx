import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PageMetadata from '../assets/PageMetadata';
import styles from '../scss/redirect.module.scss';

export const metadata = {
  title: 'Redirect',
};

export default function Redirect() {
  const router = useRouter();
  useEffect(() => {
    const redirectToContactsPage = () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/contacts');
    };

    const timeOutId = setTimeout(() => redirectToContactsPage(), 2000);
    return () => clearTimeout(timeOutId);
  }, [router]);

  return (
    <div>
      <PageMetadata title={metadata.title} />
      <div>
        <Header />
        <main className={styles.main}>
          <div className={styles.redirectContainer}>
            <div className={styles.flexBlock}>
              <h2 className={styles.flexBlock__title}>We are crafting your spiritual growth plan</h2>
              <div className={styles.flexBlock__loader}>
                <div className={styles.flexBlock__progress} />
              </div>
              <span className={styles.flexBlock__percentage}>87%</span>
              <ul className={styles.flexBlock__list}>
                <li className={styles.flexBlock__list__item}>
                  Aligning with your goals
                </li>
                <li className={styles.flexBlock__list__item}>
                  Reviewing your answers
                </li>
                <li className={styles.flexBlock__list__item}>
                  Picking Bible verses and prayers for you
                </li>
                <li className={styles.flexBlock__list__item}>
                  Finalizing your personalized plan
                </li>
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
