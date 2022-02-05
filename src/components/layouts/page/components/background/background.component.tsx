import React from 'react';
import { eStyle } from 'interfaces';
import { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { Vector } from 'components/core/vector/index';

const styles: eStyle = {
  position: 'absolute',
  maxHeight: '50%',
};

export const Background: React.FC = () => (
  <Vector
    eStyle={styles}
    height='100%'
    width='100%'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path fill='url(#a)' d='M0 0h375v535H0z' />
    <Defs>
      <LinearGradient
        id='a'
        x1={554.016}
        y1={281.946}
        x2={69.088}
        y2={-77.361}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#2A14F6' />
        <Stop offset={1} stopColor='#E409F9' />
      </LinearGradient>
    </Defs>
  </Vector>
);
