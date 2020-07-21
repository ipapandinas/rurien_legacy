import React, { ReactNode } from 'react';

import { Resize } from './1-Atoms';
import { SideMenu } from './3-Blocks';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <SideMenu />
      <main>
        <div className="App__content">{children}</div>
        <Resize />
      </main>
    </>
  );
}
