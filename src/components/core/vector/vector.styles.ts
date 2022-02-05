import { eStyle } from 'interfaces';

import styled from 'styled-components/native';
import Svg from 'react-native-svg';
import { getStyles } from 'utils';

export const Vector = styled(Svg)<eStyle>`
  ${({ eStyle }) => getStyles(eStyle)}
`;
