import Image from 'next/image';
import { CustomButton } from '../../../CustomButton';
import styles from './ProductItemCard.module.scss';
import { IProductItemCardProps } from './types';

/**
 Компонент `ProductItemCard` представляет собой карточку товара,
 отображающую изображение, название, категорию и цену продукта.
 
 @param {IDataProduct} props - Данные продукта, которые передаются в компонент.
 @param {string} props.id - Идентификатор продукта.
 @param {string} props.title - Название продукта.
 @param {string} props.category - Категория продукта.
 @param {number} props.price - Цена продукта.
 @param {string} props.thumbnail - URL миниатюры товара.
 
 @returns {JSX.Element} Элемент карточки товара, содержащий информацию о продукте.
 
 @example
 const product = {
   id: '1',
   title: 'Awesome Product',
   category: 'Electronics',
   price: 99.99,
   thumbnail: 'https://example.com/image.jpg'
 };
 
 <ProductItemCard {...product} />
 */
export const ProductItemCard = (props: IProductItemCardProps) => {
  const { price, thumbnail, title, category, isAuthorized } = props;

  return (
    <article className={styles.itemCardWrapper}>
      <figure className={styles.imageBlock}>
        <Image
          width={100}
          height={100}
          className={styles.image}
          src={thumbnail}
          alt={title}
        />
      </figure>

      <div className={styles.textBlock}>
        <h2 className={styles.titleItem}>{title}</h2>
        <p className={styles.categoryItem}>{category.toUpperCase()}</p>
        <p className={styles.priceItem}>${price}</p>
      </div>

      {isAuthorized && (
        <CustomButton
          id={'addToCartBtn'}
          title={'Add to cart'}
          onClick={() => {}}
          disabled={false}
        />
      )}
    </article>
  );
};
