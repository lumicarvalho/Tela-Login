import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";
import React from 'react';

const Button = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
