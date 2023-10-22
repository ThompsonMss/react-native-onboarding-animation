import { Dimensions, Platform } from 'react-native'
import styled from "styled-components/native";
import Animated from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const isIOs = Platform.OS === 'ios';

interface ContainerCircleProps {
  translateX: number
}

const ContainerCircle = styled(Animated.View) <ContainerCircleProps>`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: -${isIOs ? 20 : 40}px;
  left: ${props => (Dimensions.get('window').width * props.translateX) - 200 + 20}px;
`;

interface CircleGradientProps {
  colors: [string, string];
}

const CircleGradient = styled(LinearGradient).attrs(props => ({
  colors: props.colors,
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 }
})) <CircleGradientProps>`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

export const Styles = {
  ContainerCircle,
  CircleGradient
}