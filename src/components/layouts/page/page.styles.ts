import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const AppContainer = styled.View`
  width: 100%;
  height:100%;
  background-color: #2a2a33;
`;


export const Content = styled.View`
  padding-top: ${Constants.statusBarHeight + 14};
  padding-left: 2.67%;
  padding-right: 2.4%;
`;
