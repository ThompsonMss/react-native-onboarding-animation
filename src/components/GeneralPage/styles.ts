import { Dimensions, Platform } from 'react-native'
import styled, { css } from "styled-components/native";
import { PADDING_PAGE } from '@src/general/constants/styles';
import Animated from 'react-native-reanimated';

const isIOs = Platform.OS === 'ios';

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const ContainerInfo = styled.View`
  position: absolute;
  bottom: ${isIOs ? 32 : 16}px;
  left: 20px;
  width: ${Dimensions.get('window').width - (PADDING_PAGE * 2)}px;
`;

interface TextInfoProps {
  color: '#000' | "#FFF"
}

const TextInfo = styled(Animated.Text) <TextInfoProps>`
  font-weight: bold;
  font-size: 36px;
  color: ${props => props.color};
  margin-bottom: 70px;
`;

interface LineHorizontalProps {
  isHorizontalLeft: boolean;
  color: '#000' | '#FFF'
}

const LineHorizontal = styled.View<LineHorizontalProps>`
  height: 1px;
  width: 164px;
  background-color: ${props => props.color};
  position: absolute;
  bottom: ${isIOs ? 200 : 184}px;
  
  ${props => {
    if (props.isHorizontalLeft) {
      return css`
        left: 0px;
      `;
    } else {
      return css`
        right: 0px;
      `;
    }
  }};
`;

export const LineVertical = styled.View`
  height: 100%;
  width: 1px;
  background-color: #000;
  position: absolute;
  left: 0px;
  bottom: 200px;
`;

const ViewButtonNext = styled(Animated.View)`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const ButtonNext = styled.TouchableOpacity``;

interface TextButtonNextProps {
  color: '#000' | "#FFF"
}

const TextButtonNext = styled(Animated.Text) <TextButtonNextProps>`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.color};
`;

export const Styles = {
  Container,
  ContainerInfo,
  TextInfo,
  LineHorizontal,
  LineVertical,
  ViewButtonNext,
  ButtonNext,
  TextButtonNext
}