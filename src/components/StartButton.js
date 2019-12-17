import React from "react";
import { StyleStartButton, StyledStartButton } from './styles/StyleStartButton';
const StartButton = ({ callback }) => 

<StyledStartButton onClick={callback} >Start Game</StyledStartButton>;

export default StartButton;
