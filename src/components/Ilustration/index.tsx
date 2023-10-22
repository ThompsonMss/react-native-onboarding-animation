import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { Styles } from './styles'

interface IlustrationProps {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>
}

export function Ilustration({ children, style }: IlustrationProps) {

  return (
    <Styles.Ilustration style={style}>
      {children}
    </Styles.Ilustration>
  );

}