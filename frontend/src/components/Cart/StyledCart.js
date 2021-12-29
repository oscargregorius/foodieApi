import styled from "styled-components";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const StyledDrawer = styled(SwipeableDrawer)``;

export const StyledContent = styled(Box)`
  width: 80%;
  margin: 0 auto;
`;

export const StyledTitle = styled.p`
  margin: 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
`;

export const StyledType = styled.p`
  margin: 0.5 0rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

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
