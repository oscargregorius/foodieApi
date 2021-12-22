import React, { useEffect } from "react";
import ToggleMenu from "../../components/ToggleMenu/ToggleMenu";
import { StyledWrapper, StyledFoodWrapper } from "./StyledFood";
import { getFood } from "../../redux/actions/foodActions";
import { useDispatch, useSelector } from "react-redux";
import CardBox from "../../components/Card/CardBox";

function Food() {
  const dispatch = useDispatch();
  const { food } = useSelector((sel) => sel.foodReducer);

  useEffect(() => {
    getFood(dispatch);
  }, []);

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
