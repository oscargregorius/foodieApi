import styled from "styled-components";
import Button from "@mui/material/Button";

export const StyledItemWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
`;

export const StyledImg = styled.img`
  height: 3rem;
  width: 5rem;
  object-fit: cover;
`;

export const StyledItemText = styled.p`
  font-size: 1rem;
  flex-grow: 1.5;
`;

export const StyledAmountWrapper = styled.div`
  flex-grow: 2.5;
  display: flex;
`;

export const StyledAmountText = styled.p`
  margin: 0 1rem;
  font-size: 1rem;
`;

export const StyledBtn = styled(Button)`
  height: 50%;
`;
