import { StyleProp, ViewStyle } from 'react-native'
import { Styles } from './styles'

interface CircleGradientProps {
  style: StyleProp<ViewStyle>;
  colors: [string, string];
  translateX: number
}

export function CircleGradient({ style, colors, translateX }: CircleGradientProps) {

  return (
    <Styles.ContainerCircle style={style} translateX={translateX}>
      <Styles.CircleGradient colors={colors} style={{ transform: [{ rotate: '45deg' }] }} />
    </Styles.ContainerCircle>
  );

}