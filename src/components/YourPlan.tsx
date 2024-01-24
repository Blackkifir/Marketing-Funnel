import React, { FormEvent, useState } from 'react';
import styles from './scss/YourPlan.module.scss';

export default function YourPlan() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onSubmitPlan = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeIsChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className={styles.planContainer}>
      <div className={styles.flexBlock}>
        <h2 className={styles.flexBlock__title}>Choose your plan</h2>
        <form onSubmit={onSubmitPlan}>
          <div className={styles.yourPlan}>
            <input name="plan-1" type="checkbox" className={styles.yourPlan__check} />
            <p className={styles.yourPlan__text}>1-Month Plan</p>
            <div className={styles.yourPlan__price}>
              <span className={styles.yourPlan__dollars}>$</span>
              <p className={styles.yourPlan__numb}>10</p>
            </div>
          </div>
          <div className={!isChecked ? styles.yourPlanPopular__mostPopular : styles.yourPlanPopular__mostPopularActive}>
            <p className={styles.yourPlanPopular__mostPopular__text}> Most Popular</p>
            <div className={styles.yourPlanPopular}>
              <input
                name="plan-2"
                onChange={onChangeIsChecked}
                checked={isChecked}
                type="checkbox"
                className={styles.yourPlanPopular__checkPopular}
              />
              <p className={styles.yourPlan__text}>3-Month Plan</p>
              <div className={styles.yourPlan__price}>
                <span className={styles.yourPlan__dollars}>$</span>
                <p className={styles.yourPlan__numb}>30</p>
              </div>
            </div>
          </div>
          <div className={styles.yourPlan}>
            <input name="plan-3" type="checkbox" className={styles.yourPlan__check} />
            <p className={styles.yourPlan__text}>6-Month Plan</p>
            <div className={styles.yourPlan__price}>
              <span className={styles.yourPlan__dollars}>$</span>
              <p className={styles.yourPlan__numb}>60</p>
            </div>
          </div>
          <button type="submit" className={styles.yourPlanBtn}>Get my plan</button>
        </form>
        <p className={styles.yourPlanDescription}>
          You are enrolling in a 3-monthly subscription to
          <a
            className={styles.yourPlanLink}
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
    </section>
  );
}
