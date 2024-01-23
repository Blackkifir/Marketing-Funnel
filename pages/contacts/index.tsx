import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PageMetadata from '../assets/PageMetadata';
import styles from '../scss/contacts.module.scss';

export const metadata = {
  title: 'Contacts',
};

export default function Contacts() {
  const [inputValue, setInputValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsValidEmail(true);
    setIsDisabled(true);
  }, []);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setInputValue(email);
    // Проверяем, соответствует ли введенное значение формату email
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    setIsValidEmail(isValid);
    setIsDisabled(!isValid);
  };

  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push('/progress');
    console.log(inputValue);
  };

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push('/progress');
    console.log(inputValue);
  };

  return (
    <div>
      <PageMetadata title={metadata.title} />
      <div>
        <Header />
        <main className={styles.main}>
          <div className={styles.contactsContainer}>
            <div className={styles.flexBlock}>
              <div className={styles.flexBlock__textBlock}>
                <h2 className={styles.flexBlock__title}>
                  Enter your email to get your personalised Spiritual Growth Plan
                </h2>
              </div>
              <form onSubmit={onSubmitForm}>
                <div className={styles.flexBlock__textWidthInput}>
                  <p className={styles.flexBlock__topInputText}>Email</p>
                  <input
                    name="email"
                    onChange={onChangeInput}
                    className={`${styles.flexBlock__inputEmail} 
                    ${!isValidEmail ? styles.flexBlock__invalidInput : ''}`}
                    type="email"
                    title="Enter a valid email address"
                    required
                  />
                </div>
                <p className={`${styles.flexBlock__errorText}
                    ${!isValidEmail ? styles.flexBlock__errorTextActive : ''}`}
                >
                  Error
                </p>
              </form>
            </div>
            <button
              type="submit"
              disabled={isDisabled}
              onClick={onClickSubmit}
              className={styles.btnContinue}
            >
              Continue
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
