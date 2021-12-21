import React from "react";
import {
  StyledNav,
  StyledToolBar,
  StyledLogo,
  StyledNavigation,
} from "./StyledNavbar";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  return (
    <StyledNav position="static">
      <StyledToolBar>
        <StyledLogo onClick={() => history.push("/")}>foodie</StyledLogo>
        <StyledNavigation onClick={() => history.push("/")}>
          home
        </StyledNavigation>
        <StyledNavigation onClick={() => history.push("/menu")}>
          menu
        </StyledNavigation>
      </StyledToolBar>
    </StyledNav>
  );
}

export default Navbar;
