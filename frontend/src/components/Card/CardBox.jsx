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

const CardBox = ({ item, amount }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((sel) => sel.cartReducer);
  const { user } = useSelector((sel) => sel.authReducer);
  const [amounts, setAmount] = useState(0);

  useEffect(() => {
    if (user?.id && !setIn) {
      setIn = true;
      getCart(dispatch, user.id);
    }
  }, [user]);

  const handleAddFood = async () => {
    const obj = {
      foodId: item.id,
      drinkId: null,
      sidesId: null,
      cartId: cart.id,
    };
    await addToCart(obj);
    setAmount((prev) => (prev += 1));
  };

  const handleRemoveFood = async () => {
    if (amounts === 0) {
      return;
    }
    const obj = {
      userId: user.id,
      category: "foodId",
      categoryId: item.id,
    };
    await updateCart(obj);
    setAmount((prev) => (prev -= 1));
  };

  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={item.img} alt="food" />
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <StyledCat>
          Category: {<StyledText>{item.category}</StyledText>}
        </StyledCat>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </StyledCardContent>
      <StyledButtons>
        <Button variant="outlined" size="small" onClick={handleAddFood}>
          +
        </Button>
        <StyledAmount>{amounts}</StyledAmount>
        <Button variant="outlined" size="small" onClick={handleRemoveFood}>
          -
        </Button>
      </StyledButtons>
    </StyledCard>
  );
};

export default CardBox;
