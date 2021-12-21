import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export const StyledNav = styled(AppBar)`
  margin-bottom: 1rem;
  background-color: orange;
`;

export const StyledToolBar = styled(Toolbar)`
  background: orange;
  display: flex;
  gap: 1rem;
`;

export const StyledLogo = styled.p`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1rem;
  flex-grow: 3;
  color: black;
  cursor: pointer;
`;

export const StyledNavigation = styled.p`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1rem;
  flex-grow: 0.5;
  text-align: center;
  cursor: pointer;
`;
