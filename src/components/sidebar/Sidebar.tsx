import { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';
import { getCategories } from '../../ecommerceAPI/getCategories';
import { getToken } from '../../ecommerceAPI/getToken';
export function Sidebar() {
  const [categories, setCategories] = useState([]);

  return (
    <section className={styles.sidebar}>
      <ul className={styles.menuList}>
        <button
          className={styles.button}
          type="button"
          onClick={async () => {
            const token = await getToken();
            const { access_token } = await token.json();
            const categoriesData = await getCategories(access_token);
            console.log('categoriesData', categoriesData);
            setCategories(categoriesData);
          }}
        >
          Show categories
        </button>
        {categories.map((element: any, index: any) => {
          return (
            <li key={index} className={styles.menuItem}>
              {`${element.slug.en}-id-${element.id}`}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
