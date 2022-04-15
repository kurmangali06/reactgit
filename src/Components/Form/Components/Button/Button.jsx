import React from "react";

export const Button = ({ disabled, onButtonClick }) => (
  <button type="submit"
    className="submit" disabled={disabled} onClick={onButtonClick} >
    click
  </button>
);