import React, { useState, useEffect } from "react";
import {
  StyledCard,
  StyledCardContent,
  StyledCat,
  StyledText,
  StyledAmount,
  StyledButtons,
} from "./StyledCardBox";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  addToCart,
  getCart,
  updateCart,
} from "../../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
let setIn = false;

const CardBox = ({ item, type }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((sel) => sel.cartReducer);
  const { cartItems } = useSelector((sel) => sel.cartReducer);
  const { user } = useSelector((sel) => sel.authReducer);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (user?.id && !setIn) {
      setIn = true;
      getCart(dispatch, user.id);
    }
  }, [user]);

  useEffect(() => {
    calcAmountOfItems(type);
  }, [cartItems?.[type]]);

  const calcAmountOfItems = (typed) => {
    let countedAmount = 0;
    if (cartItems?.[typed]) {
      for (const type of cartItems[typed]) {
        if (type.id === item.id) {
          countedAmount += 1;
        }
      }
    }
    setAmount(countedAmount);
  };

  const handleAddItem = async () => {
    const obj = {
      foodId: type === "food" ? item.id : null,
      drinkId: type === "drink" ? item.id : null,
      sidesId: type === "sides" ? item.id : null,
      cartId: cart.id,
    };
    await addToCart(obj, dispatch, user.id);
  };

  const handleRemoveItem = async () => {
    if (amount === 0) {
      return;
    }
    const obj = {
      userId: user.id,
      category: `${type}Id`,
      categoryId: item.id,
    };
    await updateCart(obj, dispatch, user.id);
  };

  return (
    <>
      {cartItems && (
        <StyledCard sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={item.img} alt="menu" />
          <StyledCardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <StyledCat>
              Category: {<StyledText>{item.category}</StyledText>}
            </StyledCat>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </StyledCardContent>
          <StyledButtons>
            <Button variant="outlined" size="small" onClick={handleAddItem}>
              +
            </Button>
            <StyledAmount>{amount}</StyledAmount>
            <Button variant="outlined" size="small" onClick={handleRemoveItem}>
              -
            </Button>
          </StyledButtons>
        </StyledCard>
      )}
    </>
  );
};

export default CardBox;
