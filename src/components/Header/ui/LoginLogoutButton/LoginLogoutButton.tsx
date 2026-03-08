import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStore } from '@store';
import styles from './LoginLogoutButton.module.scss';

export const LoginLogoutButton = () => {
  const { userData, setUserData } = useStore();
  const router = useRouter();
  const onLogin = () => router.push('/auth');
  const onLogout = () => {
    setUserData(undefined);
    localStorage.removeItem('auth_token');
    router.push('/auth');
  };
  const className = userData ? styles.logout : styles.login;

  const onClick = () => (!userData ? onLogin() : onLogout());

  return (
    <Link className={className} onClick={onClick} href={'/auth'}>
      {userData ? `${userData?.firstName} ${userData?.lastName}` : 'Login'}
    </Link>
  );
};
