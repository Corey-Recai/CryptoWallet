import React from 'react';
import { eStyle } from 'interfaces';
import { SearchIcon } from 'components/core/icons/index';
import { SearchWrapper, InputField } from './searchField.styles';

const styles: eStyle = {
  position: 'absolute',
  top: '8px',
  left: '230px',
};

export const SearchBar: React.FC = () => {
  return (
    <SearchWrapper>
      <InputField
        placeholder='Type to search'
        placeholderTextColor={'#ffffff'}
      />
      <SearchIcon eStyle={styles} />
    </SearchWrapper>
  );
};
