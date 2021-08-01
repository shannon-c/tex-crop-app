import {SafeAreaView, View} from 'react-native';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

export const VerticalContainer = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
