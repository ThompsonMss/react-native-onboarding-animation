import { RefObject } from 'react';
import { ScrollView, useWindowDimensions, StyleProp, ViewStyle } from 'react-native'
import LottieView, { AnimationObject } from 'lottie-react-native'
import { Extrapolate, SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { Ilustration } from '@src/components/Ilustration';
import { GeneralPage } from '@src/components/GeneralPage';
import { CircleGradient } from '@src/components/CircleGradient';

export interface OnboardingPageItemDataProps {
  id: number;
  sourceLottie: AnimationObject;
  styleLottie?: StyleProp<ViewStyle>;
  titlePage: string;
  colorTitlePage: '#000' | '#FFF';
  line: {
    typeLine: 'HORIZONTAL' | 'VERTICAL';
    isHorizontalLeft?: boolean;
    color: '#000' | '#FFF';
  };
  buttonNext: {
    label: string;
    color: '#000' | '#FFF';
  };
  circle?: {
    colors: [string, string]
  },
  circleFixed?: {
    colors: [string, string]
  }
}

interface OnboardingPageProps {
  scrollXAxis: SharedValue<number>;
  refScroll: RefObject<ScrollView>;
  index: number;
  itensLength: number;
  itemPage: OnboardingPageItemDataProps;
}

export function OnboardingPage({ scrollXAxis, refScroll, index, itemPage, itensLength }: OnboardingPageProps) {

  const { width: widthScreen } = useWindowDimensions();

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollXAxis.value,
      [
        (index - 1) * widthScreen,
        index * widthScreen,
        (index + 1) * widthScreen
      ],
      [
        1, 12, 12
      ],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale: scale }]
    }
  })

  const transition = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollXAxis.value,
      [
        (index - 1) * widthScreen,
        index * widthScreen,
        (index + 1) * widthScreen
      ],
      [
        0, 0, -200
      ],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateX: translateX }]
    }
  })


  const opacityText = useAnimatedStyle(() => {

    const opacity = interpolate(
      scrollXAxis.value,
      [
        ((widthScreen * (index * 4)) / 4),
        ((widthScreen * ((index * 4) + 1)) / 4)
      ],
      [
        1, 0
      ],
      Extrapolate.CLAMP
    );

    return {
      opacity: opacity
    }
  })

  return (
    <>
      <GeneralPage.Container width={widthScreen} zIndex={itensLength - index}>

        <Ilustration style={transition}>
          <LottieView
            source={itemPage.sourceLottie}
            autoPlay
            loop
            style={itemPage?.styleLottie ? itemPage?.styleLottie : {}}
          />
        </Ilustration>

        <GeneralPage.ContainerInfo>

          <GeneralPage.TextInfo
            style={transition}
            textValue={itemPage.titlePage}
            color={itemPage.colorTitlePage}
          />

          {itemPage.line.typeLine === 'HORIZONTAL' && (
            <GeneralPage.Line direction='HORIZONTAL' isHorizontalLeft={itemPage.line.isHorizontalLeft} color={itemPage.line.color} />
          )}

          {itemPage.line.typeLine === 'VERTICAL' && (
            <GeneralPage.Line direction='VERTICAL' color={itemPage.line.color} />
          )}

          <GeneralPage.ButtonNext
            color={itemPage.buttonNext.color}
            onPress={() => refScroll?.current.scrollTo({ x: widthScreen * (index + 1), y: 0, animated: true })}
            textValue={itemPage.buttonNext.label}
            styleView={transition}
            styleText={opacityText}
          />

        </GeneralPage.ContainerInfo>
      </GeneralPage.Container>

      {itemPage?.circle && (
        <>
          <CircleGradient
            style={circleAnimation}
            colors={itemPage?.circle.colors}
            translateX={index}
          />
        </>
      )}

      {itemPage?.circleFixed && (
        <>
          <CircleGradient
            style={{}}
            colors={itemPage?.circleFixed.colors}
            translateX={index + 1}
          />
        </>
      )}

    </>
  )

}