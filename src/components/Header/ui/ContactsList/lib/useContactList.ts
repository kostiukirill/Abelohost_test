import {
  EContactAction,
  EContactType,
  IContactData,
  IUseContactsListDataReturns,
} from '../../../types';

/**
 Хук `useContactListData` возвращает список контактных данных,
 который может быть использован в компонентах для отображения информации о контактах.
 
 @returns {IUseContactsListDataReturns} Объект, содержащий массив контактных данных.
 @returns {IContactData<EContactAction>[]} returns.contactsData - Массив объектов контактных данных,
 где каждый объект содержит информацию о контакте, включая действие, значение, заголовок и тип.
 
 @example
 const { contactsData } = useContactListData();
 // contactsData будет содержать массив объектов с контактной информацией
 */
export const useContactListData = (): IUseContactsListDataReturns => {
  const contactsData: IContactData<EContactAction>[] = [
    {
      action: EContactAction.phone,
      value: '+021-95-51-84'.replace(/\D/g, ''),
      title: '+021-95-51-84',
      type: EContactType.phone, // Исправлено на 'phone'
    },
    {
      action: EContactAction.mail,
      value: 'shop@abelohost.com',
      title: 'shop@abelohost.com',
      type: EContactType.mail, // Правильно
    },
    {
      action: EContactAction.address,
      value: encodeURIComponent('1734 Stonecoal Road'),
      title: '1734 Stonecoal Road',
      type: EContactType.address, // Исправлено на 'address'
    },
  ];

  return { contactsData };
};
