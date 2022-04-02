import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";

import { Container, SpacingIcon, Title } from "./styles";
import { Props } from "./types";

const Button = ({
  title,
  onPress,
  disabled,
  icon,
  outLined,
  color,
  textType = "regular",
  textColor,
}: Props) => {
  const { colors } = useTheme();

  const titleColor = useMemo(() => {
    if (textColor) return textColor;
    if (disabled) return colors.backdrop.main;
    return outLined ? colors.backdrop.main : colors.background.main;
  }, [textColor, disabled, outLined, colors]);

  return (
    <Container
      onPress={onPress}
      disabled={disabled}
      outLined={outLined || disabled}
      color={color}
    >
      {!!icon && (
        <>
          {icon}
          <SpacingIcon />
        </>
      )}
      <Title color={titleColor} type={textType}>
        {title}
      </Title>
    </Container>
  );
};

export default Button;
