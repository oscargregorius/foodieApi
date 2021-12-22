import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

export const StyledAvatar = styled(Avatar)`
  background-color: orange !important;
  color: white;
`;

export const StyledTitle = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const StyledText = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  align-self: center;
`;
