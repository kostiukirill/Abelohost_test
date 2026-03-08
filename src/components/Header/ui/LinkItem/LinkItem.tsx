import { ILinkData } from '../../types';

/**
 Компонент `LinkItem` отображает элемент ссылки с заданным заголовком.
 
 @param {ILinkData} props - Свойства, содержащие данные для ссылки.
 @param {string} props.title - Заголовок или текст ссылки, отображаемый пользователю.
 
 @returns {JSX.Element} Элемент, содержащий текст ссылки.
 */
export const LinkItem = (props: ILinkData) => {
  const { title } = props;

  return <div>{title}</div>;
};
