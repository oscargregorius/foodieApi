import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useSelector } from "react-redux";
import { StyledWrapper } from "./StyledToggleMenu";
import { useHistory } from "react-router-dom";

function ToggleMenu({ selected }) {
  const history = useHistory();
  const { cartItems } = useSelector((sel) => sel.cartReducer);
  const [alignment, setAlignment] = React.useState(selected);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <StyledWrapper>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          onClick={() => history.push("/food")}
          value="food"
          aria-label="left aligned"
          disabled={false}
        >
          Food
        </ToggleButton>
        <ToggleButton
          onClick={() => history.push("/drinks")}
          value="drinks"
          aria-label="centered"
          disabled={cartItems?.food ? false : true}
        >
          Drinks
        </ToggleButton>
        <ToggleButton
          value="sides"
          aria-label="right aligned"
          disabled={cartItems?.drink ? false : true}
        >
          Sides
        </ToggleButton>
        <ToggleButton
          value="order"
          aria-label="justified"
          disabled={cartItems?.sides ? false : true}
        >
          Order
        </ToggleButton>
      </ToggleButtonGroup>
    </StyledWrapper>
  );
}

export default ToggleMenu;
