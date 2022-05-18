import React, { FC } from 'react';
import ButtonUI from '@mui/material/Button';

interface ButtonProps {
  disabled: boolean,
  onButtonClick?: () => void
}

export const Button: FC<ButtonProps> = ({ disabled, onButtonClick }) => (
  <ButtonUI
    type="submit"
    variant="outlined"
    disabled={disabled}
    onClick={onButtonClick}
  >
    click
  </ButtonUI>
);
