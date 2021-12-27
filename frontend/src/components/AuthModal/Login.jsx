import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import { openModal as opModal } from "../../redux/actions/modalActions";
import Button from "@mui/material/Button";
import {
  StyledModal,
  StyledBox,
  StyledTitle,
  StyledInput,
  StyledBtnWrapper,
  StyledWrongAuth,
} from "./StyledModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Login({ handleReg }) {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(opModal());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongAuth, setWrongAuth] = useState(false);
  const { openModal } = useSelector((selector) => selector.modalReducer);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userToLogIn = {
      username: username,
      password: password,
    };

    const isLoggedIn = await loginUser(dispatch, userToLogIn);
    if (isLoggedIn === false) {
      setWrongAuth(true);
      return;
    }
    setWrongAuth(false);
    setUsername("");
    setPassword("");
    dispatch(opModal());
  };

  return (
    <StyledModal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox sx={style}>
        <StyledTitle>login</StyledTitle>
        <form onSubmit={(e) => handleLogin(e)}>
          <StyledInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: "1rem" }}
            label="Username"
          />
          <StyledInput
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
          <StyledBtnWrapper>
            {wrongAuth && (
              <StyledWrongAuth>Wrong email/password</StyledWrongAuth>
            )}
            <Button type="submit" variant="contained">
              Login
            </Button>
          </StyledBtnWrapper>
        </form>
        <StyledBtnWrapper>
          <Button onClick={() => handleReg(true)} variant="contained">
            Register
          </Button>
        </StyledBtnWrapper>
      </StyledBox>
    </StyledModal>
  );
}

export default Login;
