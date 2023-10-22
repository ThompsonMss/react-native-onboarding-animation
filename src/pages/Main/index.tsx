import { useRef } from 'react';
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

import { Styles } from './styles'

import { IndicatorDot } from '@src/components/IndicatorDot';
import { dataOnboarding } from '@src/general/dataOnboarding';
import { OnboardingPage } from '@src/components/OnboardingPage';

export function Main() {

  const refScroll = useRef();

  const scrollXAxis = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollXAxis.value = event.contentOffset.x;
  });

  return (
    <Styles.Container>

      <Styles.ScrollView ref={refScroll} onScroll={scrollHandler}>

        {dataOnboarding.map((item, index) => (
          <OnboardingPage
            refScroll={refScroll}
            scrollXAxis={scrollXAxis}
            index={index}
            itensLength={dataOnboarding.length}
            itemPage={item}
            key={item.id}
          />
        ))}

      </Styles.ScrollView>

      <Styles.ContainerIndicator>
        <Styles.ItemIndicator>

          {dataOnboarding.map((item, index) => (
            <IndicatorDot key={item.id} scrollXAxis={scrollXAxis} page={index} />
          ))}

        </Styles.ItemIndicator>
      </Styles.ContainerIndicator>

    </Styles.Container>
  )

}