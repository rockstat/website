import * as React from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export type LinkMenuPosition = 'top' | 'bottom';

export interface WrapperProps {
  headerBgActive?: boolean;
  linkMenuPosition?: LinkMenuPosition;
  lang?: string;
  documentation?: boolean;
  activeSection?: string;
  children?: React.ReactNode;
}

export function Wrapper({ headerBgActive, linkMenuPosition, lang = 'ru', documentation, activeSection, children }: WrapperProps) {
  return (
    <div className={'rockstat-container'} style={{ width: '100%' }}>
      <Header
        lang={lang}
        headerBgActive={headerBgActive}
        linkMenuPosition={linkMenuPosition}
        documentation={documentation}
        activeSection={activeSection}
      />
      <div className={'rockstat-container-content'}>
        {children}
      </div>
      <Footer lang={lang} />
    </div>
  );
}
