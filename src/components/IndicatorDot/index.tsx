import { useWindowDimensions } from 'react-native'
import { useAnimatedStyle, interpolate, Extrapolate, interpolateColor } from 'react-native-reanimated';
import { COLORS_PAGES } from '@src/general/constants/styles';
import { Styles } from './styles'

export function IndicatorDot({ scrollXAxis, page = 0 }) {

  const { width: widthScreen } = useWindowDimensions();

  const styleIndicator = useAnimatedStyle(() => {

    const width = interpolate(
      scrollXAxis.value,
      [(page - 1) * widthScreen, (page) * widthScreen, (page + 1) * widthScreen],
      [16, 32, 16],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollXAxis.value,
      [(page - 1) * widthScreen, (page) * widthScreen, (page + 1) * widthScreen],
      [.7, 1, .7],
      Extrapolate.CLAMP
    );

    const backgroundColor = interpolateColor(
      scrollXAxis.value,
      [0, widthScreen, 2 * widthScreen],
      [
        COLORS_PAGES.page1.primary,
        COLORS_PAGES.page2.primary,
        COLORS_PAGES.page3.primary
      ]
    );

    return {
      backgroundColor: backgroundColor,
      opacity: opacity,
      width: width
    }

  });

  return <Styles.Indicator style={styleIndicator} />;

}