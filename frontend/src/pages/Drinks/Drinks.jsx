import React, { useEffect } from "react";
import ToggleMenu from "../../components/ToggleMenu/ToggleMenu";
import { getCartItems } from "../../redux/actions/cartActions";
import { getDrinks } from "../../redux/actions/foodActions";
import { useDispatch, useSelector } from "react-redux";
import { StyledCardWrapper, StyledWrapper } from "./StyledDrinks";
import CardBox from "../../components/Card/CardBox";

function Drinks() {
  const dispatch = useDispatch();
  const { user } = useSelector((sel) => sel.authReducer);
  const { drinks } = useSelector((sel) => sel.foodReducer);

  useEffect(() => {
    if (user) {
      getDrinks(dispatch);
      getCartItems(dispatch, user.id);
    }
  }, [user]);

  return (
    <StyledWrapper>
      <ToggleMenu selected="drinks" />
      <StyledCardWrapper>
        {drinks &&
          drinks.map((drink) => (
            <CardBox key={drink.id} item={drink} type="drink" />
          ))}
      </StyledCardWrapper>
    </StyledWrapper>
  );
}

export default Drinks;
