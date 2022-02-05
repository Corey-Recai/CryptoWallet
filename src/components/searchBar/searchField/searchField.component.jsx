import React from "react"
import {SearchIcon} from '../../core/icons/index'
import {SearchWrapper, InputField} from './searchField.style.jsx'

export const SearchBar = () => {
  return(
    <SearchWrapper>
      <InputField
        placeholder="Type to search"
        placeholderTextColor={'#ffffff'}
      />
      <SearchIcon position="absolute"/>
    </SearchWrapper>

  )
} 






