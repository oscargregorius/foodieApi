import React, { useEffect } from "react";
import {
  StyledNav,
  StyledToolBar,
  StyledLogo,
  StyledNavigation,
} from "./StyledNavbar";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/modalActions";
import { logoutUser } from "../../redux/actions/authActions";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((selector) => selector.authReducer);

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
        {user?.role === "ADMIN" && (
          <StyledNavigation onClick={() => history.push("/allUsers")}>
            users
          </StyledNavigation>
        )}
        {!user ? (
          <StyledNavigation onClick={() => dispatch(openModal())}>
            login
          </StyledNavigation>
        ) : (
          <StyledNavigation onClick={() => logoutUser(dispatch)}>
            logout
          </StyledNavigation>
        )}
      </StyledToolBar>
    </StyledNav>
  );
}

export default Navbar;
