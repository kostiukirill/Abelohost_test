import { ReactNode } from 'react';
import { useStore } from '@store';
import {
  CustomMessage,
  ETitleMessage,
  Header,
  ProtectedRoute,
  Throbber,
  Footer,
} from '@components';
import styles from './AppWrapper.module.scss';

/**
  Компонент обертки приложения, который включает в себя маршрутизацию и обработку сообщений.
 
  @param {Object} props - Свойства компонента.
  @param {ReactNode} props.children - Дочерние элементы, которые будут отображаться внутри обертки.
  @returns {ReactNode} - Отрендеренный компонент.
 */
export const AppWrapper = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  const {
    appState: { isThrobberActive, errorMessage, successMessage },
    setErrorMessage,
    setSuccessMessage,
  } = useStore();

  const title = errorMessage ? ETitleMessage.ERROR : ETitleMessage.SUCCESS;
  const message = errorMessage || successMessage || undefined;
  const onOk = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };
  return (
    <>
      <ProtectedRoute>
        <Header />
        <div className={styles.appWrapper}>{children}</div>
        <Footer />
      </ProtectedRoute>
      {isThrobberActive && <Throbber />}
      {message && <CustomMessage message={message} title={title} onOk={onOk} />}
    </>
  );
};
