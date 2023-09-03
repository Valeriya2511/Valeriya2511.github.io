import { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';
import { getCategories } from '../../ecommerceAPI/getCategories';
import { getToken } from '../../ecommerceAPI/getToken';
import internal from 'stream';

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
function filterSidebar(catList: Category[], parentId: string) {
  const res = catList.filter(cat => {
    if (cat.parent.id === parentId) {
      console.log('cat.parent.id === parentId', cat.parent.id === parentId, cat.parent.id, parentId);
    }
    return cat.parent.id === parentId;
  });
  return res;
}

export function Sidebar() {
  const [categoriesVisible, setCategoriesVisible] = useState<Category[]>([]);
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
            console.log('categoriesData', categoriesData);
            const mainCategories: Category[] = categoriesData.filter(cat => {
              return cat.ancestors.length === 0;
            });
            setMainCategories(mainCategories);
            const subCategories: Category[] = categoriesData.filter(cat => {
              return cat.ancestors.length > 0;
            });
            console.log('subCategories', subCategories);
            setSubCategories(subCategories);
            setCategoriesVisible(mainCategories);
            console.log('mainCategories', mainCategories);
          }}
        >
          Show categories
        </button>
        {categoriesVisible.map(element => {
          return (
            <li
              key={element.id}
              className={styles.menuItem}
              onClick={() => {
                console.log('subCategories', subCategories);
                console.log('element.id', element.id);
                const childCategories = filterSidebar(subCategories, element.id);
                const visibleWithParent = [];
                visibleWithParent.push(element);
                if (childCategories.length > 0) {
                  for (let i in childCategories) {
                    visibleWithParent.push(childCategories[i]);
                  }
                  setCategoriesVisible(childCategories);
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
