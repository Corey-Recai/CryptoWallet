import styled from 'styled-components/native';
import Svg from "react-native-svg";
import {getStyles} from '../../../utils/getStyles'

export const Vector = styled(Svg)`
   ${({eStyle}) => getStyles(eStyle)}
`;