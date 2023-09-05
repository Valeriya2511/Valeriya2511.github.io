import { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';
import { getCategories } from '../../ecommerceAPI/getCategories';
import { getToken } from '../../ecommerceAPI/getToken';

interface Category {
  ancestors: [];
  assets: [];
  createdAt: string;
  createdBy: { clientId: string; isPlatformClient: boolean };
  externalId: string;
  id: string;
  key: string;
  lastMessageSequenceNumber: number;
  lastModifiedAt: string;
  lastModifiedBy: { clientId: string; isPlatformClient: boolean };
  name: { de: string; en: string; it: string };
  orderHint: string;
  parent: { typeId: string; id: string };
  slug: { de: string; en: string; it: string };
  version: number;
  versionModifiedAt: string;
}

interface Ancestors {
  typeId: string;
  id: string;
}
function filterSidebar(catList: Category[], parentId: string) {
  const res = catList.filter(cat => {
    return cat.parent.id === parentId;
  });
  return res;
}
export function Sidebar() {
  const [categoriesVisible, setCategoriesVisible] = useState<Category[]>([]);
  const [categoriesData, setcategoriesData] = useState<Category[]>([]);
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  return (
    <section className={styles.sidebar}>
      <ul className={styles.menuList}>
        <button
          className={styles.button}
          type="button"
          onClick={async () => {
            const token = await getToken();
            const { access_token } = await token.json();
            const categoriesData: Category[] = await getCategories(access_token);
            setcategoriesData(categoriesData);
            const mainCategories: Category[] = categoriesData.filter(cat => {
              return cat.ancestors.length === 0;
            });
            setMainCategories(mainCategories);
            const subCategories: Category[] = categoriesData.filter(cat => {
              return cat.ancestors.length > 0;
            });
            setSubCategories(subCategories);
            setCategoriesVisible(mainCategories);
          }}
        >
          Get categories from API
        </button>
        <li
          className={styles.menuItemAncestor}
          onClick={() => {
            setCategoriesVisible(mainCategories);
          }}
        >
          Main Categories
        </li>
        {categoriesVisible.map(element => {
          return (
            <li
              key={element.id}
              className={styles.menuItem}
              onClick={() => {
                const childCategories = filterSidebar(subCategories, element.id);
                const visibleWithParent = [];
                if (element.ancestors.length > 0) {
                  const ancestorsList: Ancestors[] = element.ancestors;
                  ancestorsList.forEach(ancestor =>
                    visibleWithParent.push(categoriesData.filter(cat => cat.id === ancestor.id)[0]),
                  );
                }
                visibleWithParent.push(element);
                if (childCategories.length > 0) {
                  childCategories.forEach(el => visibleWithParent.push(el));
                  setCategoriesVisible(visibleWithParent);
                }
              }}
            >
              {`${element.name.en}`}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
