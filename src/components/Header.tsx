import Image from 'next/image';
import styles from './scss/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <button type="button" className={styles.header__backBtn}>
          <Image src="/back.svg" alt="back-Img" width={25} height={25} />
        </button>
        <h1 className={styles.header__title}>App</h1>
        <button type="button" className={styles.header__burgerBtn}>
          <Image src="/burger.svg" alt="burge-img" width={20} height={15} />
        </button>
      </div>
    </header>
  );
}
