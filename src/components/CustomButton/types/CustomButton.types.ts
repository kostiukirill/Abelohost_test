/**
  Интерфейс для свойств компонента CustomButton.
 */
export interface ICustomButtonProps {
  /**
    Уникальный идентификатор кнопки.
   */
  id: string;

  /**
    Текст, отображаемый на кнопке.
   */
  title: string;

  /**
    Функция, вызываемая при клике на кнопку.
   */
  onClick: () => void;

  /**
    Флаг, указывающий, должна ли кнопка быть отключена.
   */
  disabled: boolean;
}
