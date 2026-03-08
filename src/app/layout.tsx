'use client';

import { ReactNode } from 'react';
import './globals.scss';
import { AppWrapper } from '@components';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
