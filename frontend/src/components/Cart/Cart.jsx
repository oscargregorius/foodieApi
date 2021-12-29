import React, { useEffect, useState } from "react";
import {
  StyledDrawer,
  StyledContent,
  StyledTitle,
  StyledType,
  StyledItemWrapper,
  StyledImg,
  StyledItemText,
  StyledAmountText,
  StyledAmountWrapper,
  StyledBtn,
} from "./StyledCart";
import { useSelector, useDispatch } from "react-redux";
import { openDrawer as opDrawer } from "../../redux/actions/modalActions";
import { getCartItems } from "../../redux/actions/cartActions";
import CartItem from "../CartItem/CartItem";

function Cart() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { openDrawer } = useSelector((s) => s.modalReducer);
  const { cartItems } = useSelector((s) => s.cartReducer);
  const { user } = useSelector((s) => s.authReducer);
  const [filteredList, setFilteredList] = useState(null);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (user?.id && openDrawer) {
      getCartItems(dispatch, user.id);
      if (cartItems?.food) {
        let arr = [];
        setFilteredList(
          cartItems?.food.reduce((a, b, c) => {
            if (a.length <= 0) {
              arr.push(b);
              arr[arr.length - 1].amount = 1;
              // item.amount = 1;
            }
            const fountItem = arr.find((item) => item.id === b.id);
            if (!fountItem) {
              arr.push(b);
              arr[arr.length - 1].amount = 1;
              // item.amount = 1;
            }
            if (fountItem && c !== 0) {
              fountItem.amount =
                fountItem.amount > 0 ? fountItem.amount + 1 : 2;
            }
            return arr;
          }, arr)
        );
      }
    }
  }, [openDrawer]);

  return (
    <StyledDrawer
      anchor="top"
      open={openDrawer}
      onClose={() => dispatch(opDrawer())}
      onOpen={toggleDrawer(true)}
    >
      <StyledContent>
        <StyledTitle>Shopping cart</StyledTitle>
        <StyledType>food</StyledType>
        {filteredList &&
          filteredList.map((item) => <CartItem key={item.id} item={item} />)}
      </StyledContent>
    </StyledDrawer>
  );
}

export default Cart;
