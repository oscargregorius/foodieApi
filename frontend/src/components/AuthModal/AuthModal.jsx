import React, { useState } from "react";
import {
  StyledModal,
  StyledBox,
  StyledTitle,
  StyledInput,
  StyledBtnWrapper,
} from "./StyledModal";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { openModal as opModal } from "../../redux/actions/modalActions";
import { loginUser } from "../../redux/actions/authActions";

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

function AuthModal() {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(opModal());
  const { openModal } = useSelector((selector) => selector.modalReducer);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [register, setRegister] = useState(false);

  const handleLogin = async () => {
    const userToLogIn = {
      username: username,
      password: password,
    };

    loginUser(dispatch, userToLogIn);
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
          <Button onClick={handleLogin} variant="contained">
            Login
          </Button>
          <Button variant="contained">Register</Button>
        </StyledBtnWrapper>
      </StyledBox>
    </StyledModal>
  );
}

export default AuthModal;
