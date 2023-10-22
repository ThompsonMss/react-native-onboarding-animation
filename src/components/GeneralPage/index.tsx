import React from 'react'
import { StyleProp, ViewStyle, TextStyle } from 'react-native'
import { Styles } from './styles'

interface ContainerProps {
  children: React.ReactNode;
  zIndex: number;
  width: number;
}

function Container({ children, zIndex, width }: ContainerProps) {
  return <Styles.Container style={{ zIndex, width }}>{children}</Styles.Container>
}

interface ContainerInfoProps {
  children: React.ReactNode;
}

function ContainerInfo({ children }: ContainerInfoProps) {
  return <Styles.ContainerInfo>{children}</Styles.ContainerInfo>
}

interface TextInfoProps {
  textValue: string;
  color: '#000' | "#FFF";
  style: StyleProp<TextStyle>;
}

function TextInfo({ textValue, color, style }: TextInfoProps) {
  return <Styles.TextInfo style={style} color={color}>{textValue}</Styles.TextInfo>
}

interface ButtonNextProps {
  textValue: string;
  color: '#000' | "#FFF";
  styleView: StyleProp<ViewStyle>;
  styleText: StyleProp<TextStyle>;
  onPress: (...args: any) => any;
}

function ButtonNext({ color, textValue, onPress, styleText, styleView }: ButtonNextProps) {
  return (
    <Styles.ViewButtonNext style={styleView}>
      <Styles.ButtonNext onPress={onPress}>
        <Styles.TextButtonNext color={color} style={styleText}>{textValue}</Styles.TextButtonNext>
      </Styles.ButtonNext>
    </Styles.ViewButtonNext>
  )
}

interface LineProps {
  direction: 'HORIZONTAL' | 'VERTICAL',
  isHorizontalLeft?: boolean;
  color?: '#000' | '#FFF'
}

function Line({ direction, isHorizontalLeft = true, color }: LineProps) {

  if (direction === 'HORIZONTAL') {
    return <Styles.LineHorizontal color={color} isHorizontalLeft={isHorizontalLeft} />
  }

  return <Styles.LineVertical />
}


export const GeneralPage = {
  Container,
  ContainerInfo,
  TextInfo,
  ButtonNext,
  Line
}