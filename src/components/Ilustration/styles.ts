import { Dimensions, Platform } from 'react-native'
import styled from "styled-components/native";
import Animated from 'react-native-reanimated';
import { PADDING_PAGE } from '@src/general/constants/styles';

const isIOs = Platform.OS === 'ios';
const WIDTH_LOTTIE = Dimensions.get('window').width - (isIOs ? PADDING_PAGE : (PADDING_PAGE * 3));
const MARGIN_LEFT_LOTTIE = (Dimensions.get('window').width - WIDTH_LOTTIE) / 2;

const Ilustration = styled(Animated.View)`
  width: ${WIDTH_LOTTIE}px;
  height: ${WIDTH_LOTTIE}px;
  margin-left: ${MARGIN_LEFT_LOTTIE}px;
  margin-top: ${isIOs ? 160 : 60}px;
`;

export const Styles = {
  Ilustration
}