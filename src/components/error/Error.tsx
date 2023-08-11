import styles from './Error.module.css';
interface ErrorProps {
  error: string;
}
export function Error({ error }: ErrorProps) {
  return <p className={styles.error}>{error}</p>;
}
