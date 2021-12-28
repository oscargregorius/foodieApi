import React, { useEffect } from "react";
import { StyledDrawer, StyledContent, StyledTitle } from "./StyledCart";
import { useSelector, useDispatch } from "react-redux";
import { openDrawer as opDrawer } from "../../redux/actions/modalActions";
import { getCartItems } from "../../redux/actions/cartActions";

function Cart() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { openDrawer } = useSelector((s) => s.modalReducer);
  const { cartItems } = useSelector((s) => s.cartReducer);
  const { user } = useSelector((s) => s.authReducer);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (user?.id && openDrawer) {
      getCartItems(dispatch, user.id);
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
        {cartItems?.food &&
          cartItems.food.map((item, index) => (
            <p key={item.id + index}>{item.title}</p>
          ))}
      </StyledContent>
    </StyledDrawer>
  );
}

export default Cart;
