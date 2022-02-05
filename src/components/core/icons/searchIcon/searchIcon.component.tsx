import React from 'react';
import { eStyle } from 'interfaces';
import { Path } from 'react-native-svg';
import { Vector } from 'components/core/vector';

export const SearchIcon = ({ eStyle }: eStyle) => (
  <Vector
    eStyle={eStyle}
    width={14}
    height={14}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path
      d='M4.969 1.969C5.948.989 7.125.5 8.5.5s2.552.49 3.531 1.469c.98.979 1.469 2.156 1.469 3.531s-.49 2.552-1.469 3.531c-.979.98-2.156 1.469-3.531 1.469a4.843 4.843 0 0 1-3.156-1.125l-3.969 4-.75-.75 4-3.969A4.843 4.843 0 0 1 3.5 5.5c0-1.375.49-2.552 1.469-3.531Zm6.343.718C10.543 1.897 9.604 1.5 8.5 1.5c-1.104 0-2.052.396-2.844 1.188C4.886 3.458 4.5 4.396 4.5 5.5c0 1.104.385 2.052 1.156 2.844A3.933 3.933 0 0 0 8.5 9.5c1.104 0 2.042-.385 2.813-1.156.791-.792 1.187-1.74 1.187-2.844 0-1.104-.396-2.042-1.188-2.813Z'
      fill='#fff'
    />
  </Vector>
);
