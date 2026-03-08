import { ILinkData, IUseDataReturns } from '@components';

/**
 Хук `useLinkListData` возвращает список данных для ссылок,
 которые могут быть использованы в компонентах для отображения навигационных элементов.
 
 @returns {IUseDataReturns} Объект, содержащий массив данных ссылок.
 @returns {ILinkData[]} returns.linksData - Массив объектов с данными ссылок,
 где каждый объект содержит идентификатор, заголовок и URL ссылки.
 
 @example
 const { linksData } = useLinkListData();
 // linksData будет содержать массив объектов с информацией о ссылках
 */
export const useLinkListData = (): IUseDataReturns => {
  const linksData: ILinkData[] = [
    {
      id: 'home',
      title: 'Home',
      url: '/',
    },
    {
      id: 'hotDeals',
      title: 'Hot Deals',
      url: '/hot_deals',
    },
    {
      id: 'categories',
      title: 'Categories',
      url: '/categories',
    },
    {
      id: 'laptops',
      title: 'Laptops',
      url: '/laptops',
    },
    {
      id: 'smartphones',
      title: 'Smartphones',
      url: '/smartphones',
    },
    {
      id: 'cameras',
      title: 'Cameras',
      url: '/cameras',
    },
    {
      id: 'accessories',
      title: 'Accessories',
      url: '/accessories',
    },
  ];

  return { linksData };
};
