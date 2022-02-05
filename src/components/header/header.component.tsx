import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'components/searchBar';

export const Header: React.FC = () => {
  return (
    <View>
      <SearchBar />
    </View>
  );
};
