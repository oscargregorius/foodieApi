import React from "react";
import {
  StyledItemWrapper,
  StyledImg,
  StyledItemText,
  StyledAmountText,
  StyledAmountWrapper,
  StyledBtn,
} from "./StyledCartItem";

function CartItem({ item }) {
  return (
    <StyledItemWrapper>
      <StyledImg src={item.img} />
      <StyledItemText>{item.title}</StyledItemText>
      <StyledAmountWrapper>
        <StyledBtn variant="outlined" size="small">
          +
        </StyledBtn>
        <StyledAmountText>{item.amount}</StyledAmountText>
        <StyledBtn variant="outlined" size="small">
          -
        </StyledBtn>
      </StyledAmountWrapper>
    </StyledItemWrapper>
  );
}

export default CartItem;
