import styles from './ButtonTypeAutorization.module.css';
interface IButtonTypeAutorizationProps {
  children: string;
  onClick: () => void;
}
export default function ButtonTypeAutorization({ children, onClick }: IButtonTypeAutorizationProps) {
  return (
    <button className={styles.buttonAutorization} onClick={onClick}>
      {children}
    </button>
  );
}
