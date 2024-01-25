/* eslint-disable react/require-default-props */
import Image from 'next/image';
import styles from './scss/Header.module.scss';
import backImg from './icons/back.svg';
import burgerImg from './icons/burger.svg';

interface IPropsClicks {
  onClickBackProgress?: () => void;
  onClickBackContacts?: () => void;
}

export default function Header({ onClickBackProgress, onClickBackContacts }: IPropsClicks) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <button onClick={onClickBackProgress || onClickBackContacts} type="button" className={styles.header__backBtn}>
          <Image src={backImg as string} alt="back-Img" width={25} height={25} />
        </button>
        <h1 className={styles.header__title}>App</h1>
        <button type="button" className={styles.header__burgerBtn}>
          <Image src={burgerImg as string} alt="burge-img" width={20} height={15} />
        </button>
      </div>
    </header>
  );
}
