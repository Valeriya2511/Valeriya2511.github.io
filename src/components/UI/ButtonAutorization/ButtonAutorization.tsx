import styles from './ButtonAutorization.module.css';
interface IButtonAutorizationProps {
  type: 'button' | 'submit';
  children: string;
  onClick: () => void;
}
export default function ButtonAutorization({ type, children, onClick }: IButtonAutorizationProps) {
  return (
    <button className={styles.buttonAutorization} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
