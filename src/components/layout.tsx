import React, { ReactNode } from 'react';

import Resize from './1-Atoms/Resize/Resize';

import Header from './header';

import '../assets/styles/main.scss';
import './layout.scss';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>
        <Header siteTitle={'Header'} />
      </header>

      <main>
        <div className="App__content">{children}</div>
        <Resize />
      </main>
    </>
  );
}
