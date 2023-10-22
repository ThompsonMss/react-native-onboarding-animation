import { Platform, Dimensions } from 'react-native'
import { OnboardingPageItemDataProps } from "@src/components/OnboardingPage";

import onBoardingLottie1 from '@src/assets/lottie/On1.json'
import onBoardingLottie2 from '@src/assets/lottie/On2.json'
import onBoardingLottie3 from '@src/assets/lottie/On3.json'
import { COLORS_PAGES } from "./constants/styles";

const isIOs = Platform.OS === 'ios';

export const dataOnboarding: OnboardingPageItemDataProps[] = [
  {
    id: 1,
    sourceLottie: onBoardingLottie1,
    titlePage: `Lorem${`\n`}Ipsum is simply`,
    colorTitlePage: '#000',
    line: {
      typeLine: 'VERTICAL',
      color: '#000'
    },
    buttonNext: {
      color: '#000',
      label: 'Próximo'
    }
  },
  {
    id: 2,
    sourceLottie: onBoardingLottie2,
    titlePage: `There are${`\n`}many variations`,
    colorTitlePage: '#000',
    line: {
      typeLine: 'HORIZONTAL',
      color: '#000',
      isHorizontalLeft: true
    },
    buttonNext: {
      color: '#FFF',
      label: 'Próximo'
    },
    circle: {
      colors: COLORS_PAGES.page1.gradient
    }
  },
  {
    id: 3,
    sourceLottie: onBoardingLottie3,
    styleLottie: {
      height: 380,
      marginTop: isIOs ? -20 : -40
    },
    titlePage: `Contrary${`\n`}to popular belief`,
    colorTitlePage: '#FFF',
    line: {
      typeLine: 'HORIZONTAL',
      color: '#FFF',
      isHorizontalLeft: false
    },
    buttonNext: {
      color: '#000',
      label: 'Pronto!'
    },
    circle: {
      colors: COLORS_PAGES.page2.gradient
    },
    circleFixed: {
      colors: COLORS_PAGES.page3.gradient
    }
  },
];