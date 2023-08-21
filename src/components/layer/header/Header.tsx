import { ReactNode } from 'react';
import { Navigation } from '../../../components/navigation/Navigation';
import styles from './Header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
