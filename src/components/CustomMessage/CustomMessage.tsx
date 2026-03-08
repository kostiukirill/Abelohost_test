import { type FC } from 'react';
import { CustomButton } from '../CustomButton';
import styles from './styles/CustomMessage.module.scss';
import type { ICustomMessageProps } from './types';

/**
 Компонент `CustomMessage` представляет собой уведомление с заголовком и сообщением,
 а также кнопкой для подтверждения действия.
 
 @component
 @param {ICustomMessageProps} props - Свойства, передаваемые компоненту.
 @param {ETitleMessage} props.title - Заголовок уведомления.
 @param {string} props.message - Текст сообщения, который будет отображаться в уведомлении.
 @param {() => void} props.onOk - Функция, вызываемая при нажатии кнопки "OK".
 
 @returns {JSX.Element} Элемент, представляющий уведомление.
 */
export const CustomMessage: FC<ICustomMessageProps> = (props) => {
  const { title, message, onOk } = props;

  return (
    <div className={styles.modalback}>
      <div className={styles.messageWindow}>
        <div className={styles.textWrapper}>
          <div id="messageTitle" className={styles.title}>
            {title}
          </div>
          <div id="messageText" className={styles.message}>
            {message}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <CustomButton
            id={'messageButton'}
            title={'OK'}
            onClick={onOk}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};
