import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal as opModal } from "../../redux/actions/modalActions";
import Button from "@mui/material/Button";
import { registerUser } from "../../redux/actions/authActions";
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

function Register({ handleReg }) {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(opModal());
  const { openModal } = useSelector((selector) => selector.modalReducer);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Password is not the same");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setIsError(true);
      return;
    }
    const user = {
      username,
      password,
    };
    const isRegistered = await registerUser(user);
    if (isRegistered === false) {
      setErrorMsg("User already exists");
      setIsError(true);
      return;
    }
    handleReg(false);
  };

  return (
    <StyledModal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox sx={style}>
        <StyledTitle>register</StyledTitle>
        <form onSubmit={(e) => handleRegister(e)}>
          <StyledInput
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="username"
            style={{ marginBottom: "1rem" }}
          />
          <StyledInput
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="password"
            type="password"
            style={{ marginBottom: "1rem" }}
          />
          <StyledInput
            required
            value={repeatPassword}
            type="password"
            onChange={(e) => setRepeatPassword(e.target.value)}
            style={{ marginBottom: "1rem" }}
            label="repeat password"
          />
          {isError && <StyledWrongAuth>{errorMsg}</StyledWrongAuth>}
          <StyledBtnWrapper>
            <Button type="submit" variant="contained">
              Register
            </Button>
          </StyledBtnWrapper>
        </form>
        <StyledBtnWrapper>
          <Button onClick={() => handleReg(false)} variant="contained">
            login
          </Button>
        </StyledBtnWrapper>
      </StyledBox>
    </StyledModal>
  );
}

export default Register;
