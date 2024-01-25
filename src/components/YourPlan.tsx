import React, { useState } from 'react';
import styles from './scss/YourPlan.module.scss';

export default function YourPlan() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isPlan, setIsPlan] = useState<string[]>([]);

  const onChangeCheckBox = (plan: string) => {
    if (plan.includes('Month') && selectedPlan !== plan) {
      setSelectedPlan(plan);
      setIsPlan([plan]);
    } else if (!plan.includes('Month')) {
      setSelectedPlan(null);
      setIsPlan([plan]);
    }
  };

  const onClickSumbit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(isPlan);
  };

  return (
    <section className={styles.planContainer}>
      <div className={styles.flexBlock}>
        <h2 className={styles.flexBlock__title}>Choose your plan</h2>
        <form>
          <div className={styles.yourPlan}>
            <input
              name="plan-1"
              onChange={() => onChangeCheckBox('1-Month Plan')}
              checked={selectedPlan === '1-Month Plan'}
              type="checkbox"
              className={styles.yourPlan__check}
            />
            <p className={styles.yourPlan__text}>1-Month Plan</p>
            <div className={styles.yourPlan__price}>
              <span className={styles.yourPlan__dollars}>$</span>
              <p className={styles.yourPlan__numb}>10</p>
            </div>
          </div>
          <div className={selectedPlan === '3-Month Plan'
            ? styles.yourPlanPopular__mostPopularActive : styles.yourPlanPopular__mostPopular}
          >
            <p className={styles.yourPlanPopular__mostPopular__text}>Most Popular</p>
            <div className={styles.yourPlanPopular}>
              <input
                name="plan-2"
                onChange={() => onChangeCheckBox('3-Month Plan')}
                checked={selectedPlan === '3-Month Plan'}
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
            <input
              name="plan-3"
              onChange={() => onChangeCheckBox('6-Month Plan')}
              checked={selectedPlan === '6-Month Plan'}
              type="checkbox"
              className={styles.yourPlan__check}
            />
            <p className={styles.yourPlan__text}>6-Month Plan</p>
            <div className={styles.yourPlan__price}>
              <span className={styles.yourPlan__dollars}>$</span>
              <p className={styles.yourPlan__numb}>60</p>
            </div>
          </div>
          <button
            onClick={onClickSumbit}
            type="submit"
            className={styles.yourPlanBtn}
          >
            Get my plan
          </button>
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
