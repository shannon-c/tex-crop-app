import {Text} from 'react-native';
import styled from 'styled-components';

const screenWidth = 200;

export const BigTitle = styled(Text)`
  font-size: ${screenWidth < 500 ? 38 : 34}px;
  font-weight: bold;
`;

export const Title1 = styled(Text)`
  font-size: ${screenWidth < 500 ? 28 : 32}px;
  font-weight: bold;
`;

export const Title2 = styled(Text)`
  font-size: ${screenWidth < 500 ? 22 : 26}px;
  font-weight: bold;
`;

export const Title3 = styled(Text)`
  font-size: ${screenWidth < 500 ? 20 : 24}px;
  font-weight: bold;
`;

export const Headline = styled(Text)`
  font-size: ${screenWidth < 500 ? 17 : 21}px;
  font-weight: bold;
`;

export const Body = styled(Text)`
  font-size: ${screenWidth < 500 ? 17 : 21}px;
`;

export const Footnote = styled(Text)`
  font-size: ${screenWidth < 500 ? 13 : 17}px;
`;

export const Caption = styled(Text)`
  font-size: ${screenWidth < 500 ? 12 : 16}px;
`;
