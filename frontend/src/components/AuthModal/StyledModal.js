import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const StyledModal = styled(Modal)``;

export const StyledBox = styled(Box)`
  border: none;
  &:focus {
    outline: none;
  }
`;

export const StyledTitle = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1rem;
`;

export const StyledInput = styled(TextField)`
  width: 100%;
`;

export const StyledBtnWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;
