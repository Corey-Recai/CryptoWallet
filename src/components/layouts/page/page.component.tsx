import React from 'react';
import { AppContainer, Content } from './page.styles';
import { Background } from './components/background';

export const Page = ({ children }: { children: React.ReactNode }) => (
  <AppContainer>
    <Background />
    <Content>{children}</Content>
  </AppContainer>
);
