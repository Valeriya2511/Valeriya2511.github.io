import styles from './Pagination.module.css';
interface IPagintation {
  countItem: number;
  onClick: (prev: number) => void;
}
export default function Pagination({ countItem, onClick }: IPagintation) {
  return (
    <div className={styles.pagination}>
      <button type="button" onClick={() => onClick(countItem + 4)}>
        Add more products
      </button>
    </div>
  );
}
