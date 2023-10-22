import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { BACKGROUND_COLOR_SYSTEM, PADDING_PAGE } from '@src/general/constants/styles';

const Container = styled.View`
  background-color: ${BACKGROUND_COLOR_SYSTEM};
  flex: 1;
`;

const ScrollView = styled(Animated.ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
  bounces: false,
  scrollEventThrottle: 16,
  contentContainerStyle: {
    flexGrow: 1
  }
})`
  background-color: ${BACKGROUND_COLOR_SYSTEM};
  flex: 1;
`;

const ContainerIndicator = styled.View`
  position: absolute;
  bottom: 32px;
  left: ${PADDING_PAGE}px;
`;

const ItemIndicator = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export const Styles = {
  Container,
  ScrollView,
  ContainerIndicator,
  ItemIndicator
}