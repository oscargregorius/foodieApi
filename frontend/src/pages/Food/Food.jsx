import React, { useEffect } from "react";
import ToggleMenu from "../../components/ToggleMenu/ToggleMenu";
import { StyledWrapper, StyledFoodWrapper } from "./StyledFood";
import { getFood } from "../../redux/actions/foodActions";
import { useDispatch, useSelector } from "react-redux";
import CardBox from "../../components/Card/CardBox";
import { getCartItems } from "../../redux/actions/cartActions";

function Food() {
  const dispatch = useDispatch();
  const { food } = useSelector((sel) => sel.foodReducer);
  const { user } = useSelector((sel) => sel.authReducer);

  useEffect(() => {
    getFood(dispatch);
  }, []);

  useEffect(() => {
    if (user?.id) {
      getCartItems(dispatch, user.id);
    }
  }, [user]);

  return (
    <StyledWrapper>
      <ToggleMenu selected="food" />
      <StyledFoodWrapper>
        {food?.length &&
          food.map((item) => <CardBox key={item.id} item={item} />)}
      </StyledFoodWrapper>
    </StyledWrapper>
  );
}

export default Food;
