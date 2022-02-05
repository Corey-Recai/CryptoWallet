import React from "react";
import {AppContainer, Content} from './page.style.jsx';
import {Background} from './components/background/index';


export const Page = ({children}) => (
  <AppContainer>
  <Background/>
  <Content>
  {children}
  </Content>
  </AppContainer>
)
