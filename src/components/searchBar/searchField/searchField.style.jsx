import styled from 'styled-components/native';
import { SafeAreaView, TextInput } from "react-native";

export const SearchWrapper = styled.SafeAreaView`
    position: relative;
`;

export const InputField = styled.TextInput`
    width: 260px;
    height: 32px;
    border: 0px solid transparent;
    border-radius: 16px;
    background-color: #ffffff20;
    
    padding-left: 16px;

    color: #ffffff;
`;
