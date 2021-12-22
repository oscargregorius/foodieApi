import React from "react";
import {
  StyledWrapper,
  StyledAvatar,
  StyledText,
  StyledTitle,
  StyledInnerWrapper,
} from "./StyledUser";

function User({ user }) {
  const char = user.username.charAt(0).toUpperCase();
  return (
    <StyledWrapper>
      <StyledAvatar>{char}</StyledAvatar>
      <StyledText>{user.username}</StyledText>
      <StyledText>{user.role}</StyledText>
    </StyledWrapper>
  );
}

export default User;
