import { useEffect, useState, useRef, useContext } from 'react';
import styles from './Sidebar.module.css';
import { CategoriesContext } from '../../context/categoriesContext/CategoriesContext';
import { SelectByCategoryID } from '../../ecommerceAPI/SelectByCategoryID';
import { ProductsContext } from '../../context/productsContext/productsContext';
import { IProduct } from '../interface/IProduct';
import { IAncestor } from '../interface/IAncestor';
import { IRowProduct } from '../interface/IRowProduct';
import { getProducts } from '../../ecommerceAPI/getProducts';
import { getToken } from '../../ecommerceAPI/getToken';

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

function filterSidebar(catList: Category[], parentId: string) {
  const res = catList.filter(cat => {
    return cat.parent.id === parentId;
  });
  return res;
}

function addToProducts(currentList: IProduct[]) {
  const resList: [] | IRowProduct[] = currentList.map(currentProd => {
    const product = {
      createdAt: '',
      createdBy: { clientId: '', isPlatformClient: false },
      id: `${currentProd.id}`,
      key: `${currentProd.key}`,
      lastMessageSequenceNumber: 1,
      lastModifiedAt: '',
      lastModifiedBy: { clientId: '', isPlatformClient: false },
      lastVariantId: 1,
      masterData: { current: currentProd, staged: {}, published: true, hasStagedChanges: false },
      productType: { typeId: '', id: '' },
      taxCategory: { typeId: '', id: '' },
      version: 1,
      versionModifiedAt: '',
    };
    return product;
  });
  console.log(resList);
  return resList;
}

export function Sidebar() {
  const { categories } = useContext(CategoriesContext);
  const { setProducts } = useContext(ProductsContext);
  const categoriesData: Category[] = categories;
  // console.log('categoriesData', categoriesData);
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
          onClick={async () => {
            setCategoriesVisible(mainCategories);
            setVisibleUnvisible(styles.unvisible);
            const token = localStorage.getItem('access_token');
            if (!token) {
              const rowToken = await getToken();
              const { access_token } = await rowToken.json();
              const productData = await getProducts(access_token);
              const product = await productData.json();
              setProducts(product.results);
            } else {
              const productData = await getProducts(token);
              const product = await productData.json();
              setProducts(product.results);
            }
          }}
        >
          Back to Main Categories
        </li>
        {categoriesVisible.map(element => {
          return (
            <li
              key={element.id}
              className={styles.menuItem}
              onClick={async () => {
                const token = localStorage.getItem('access_token');
                if (token) {
                  const prod = await SelectByCategoryID(element.id, token);
                  const newProductList = addToProducts(prod);
                  setProducts(newProductList);
                }
                const childCategories = filterSidebar(subCategories, element.id);
                const visibleWithParent = [];
                setVisibleUnvisible(styles.visible);
                if (element.ancestors.length > 0) {
                  const ancestorsList: IAncestor[] = element.ancestors;
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
