'use client';

import { useStore } from '@store';
import { Throbber } from '@components';
import { useEffects } from './lib';
import styles from './ProductList.module.scss';
import { ProductItemCard } from './ui/ProductItemCard/ProductItemCard';

/**
 Компонент `ProductList` отображает список продуктов,
 полученных из состояния магазина.
 Если данные о продуктах отсутствуют, отображается индикатор загрузки.
 
 @returns {JSX.Element} Элемент списка продуктов.
 
 @example
 <ProductList />
 */
export const ProductList = () => {
  const store = useStore();
  const { dataProducts, userData } = store;
  useEffects({ store });

  return (
    <>
      <div className={styles.productListWrapper}>
        <h2 className={styles.title}>Latest products</h2>
        <div className={styles.productsList}>
          {dataProducts && dataProducts.length ? (
            dataProducts.map((data, index) => (
              <ProductItemCard
                key={index}
                {...data}
                isAuthorized={!!userData}
              />
            ))
          ) : (
            <Throbber />
          )}
        </div>
      </div>
    </>
  );
};
