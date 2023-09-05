import { useEffect, useState, useRef, useContext } from 'react';
import styles from './Sidebar.module.css';
import { CategoriesContext } from '../../context/categoriesContext/CategoriesContext';

export interface Category {
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
  const { categories } = useContext(CategoriesContext);
  // const [categoriesData, setcategoriesData] = useState<Category[]>([]);
  // setcategoriesData(categories);
  const categoriesData: Category[] = categories;
  const mainCategories = categoriesData.filter(cat => {
    return cat.ancestors.length === 0;
  });
  const subCategories: Category[] = categoriesData.filter(cat => {
    return cat.ancestors.length > 0;
  });
  const [categoriesVisible, setCategoriesVisible] = useState(mainCategories);
  useEffect(() => {
    setCategoriesVisible(mainCategories);
  }, [categories]);
  const [visibleUnvisible, setVisibleUnvisible] = useState(styles.unvisible);

  return (
    <section className={styles.sidebar}>
      <ul className={styles.menuList}>
        <li
          className={`${styles.menuBackToMain} ${visibleUnvisible}`}
          onClick={() => {
            setCategoriesVisible(mainCategories);
            setVisibleUnvisible(styles.unvisible);
          }}
        >
          Back to Main Categories
        </li>
        {categoriesVisible.map(element => {
          return (
            <li
              key={element.id}
              className={styles.menuItem}
              onClick={() => {
                const childCategories = filterSidebar(subCategories, element.id);
                const visibleWithParent = [];
                setVisibleUnvisible(styles.visible);
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
