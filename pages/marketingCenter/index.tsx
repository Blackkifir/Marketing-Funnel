import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YourPlan from '@/components/YourPlan';
import Image from 'next/image';
import PageMetadata from '../assets/PageMetadata';
import styles from '../scss/marketingCenter.module.scss';

export const metadata = {
  title: 'Marketing-Center',
};

export default function MarketingCenter() {
  return (
    <div>
      <PageMetadata title={metadata.title} />
      <div>
        <Header />
        <section className={styles.parentContainer}>
          <div className={styles.flexBlock}>
            <h2 className={styles.flexBlock__title}>Choose your plan</h2>
            <YourPlan />
            <div className={styles.flexBlock__desc}>
              <p className={styles.flexBlock__description}>
                You are enrolling in a 3-monthly subscription to
                <a
                  className={styles.flexBlock__link}
                  href="https://awesomeapp.com/subscription"
                >
                  {' '}
                  https://awesomeapp.com/subscription
                  {' '}
                </a>
                with the discount price
                $29.99.You agree that the plan you selected will automatically be extended at
                the full price for successive renewal periods and
                you will be charged $99.99 every 3 months until you cancel the subscription. Payments
                will be charged from the card you specified
                here. You can cancel your subscription by contacting our customer support team
                via email at support@awesomeapp.com Subscription
                Policy. The charge will appear on your bill as &ldquo;awesomeapp&rdquo;
              </p>
            </div>
          </div>
        </section>
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
        <Footer />
      </div>
    </div>
  );
}
