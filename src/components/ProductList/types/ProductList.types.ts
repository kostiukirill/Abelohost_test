import type { IStore } from '@store';

/**
 Интерфейс `IUseProductListProps` определяет свойства,
 которые необходимы для использования хука или компонента,
 работающего с списком продуктов.
 
 @interface IUseProductListProps
 
 @property {IStore} store - Объект глобального состояния, 
 который содержит данные о продуктах и другую связанную информацию.
 
 @example
 const props: IUseProductListProps = {
   store: {
     // свойства объекта IStore
   }
 };

 */
export interface IUseProductListProps {
  /**Объект глобального состояния */
  store: IStore;
}
