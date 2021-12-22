import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { StyledWrapper } from "./StyledToggleMenu";

function ToggleMenu({ selected }) {
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
          value="food"
          aria-label="left aligned"
          disabled={selected === "food" ? false : true}
        >
          Food
        </ToggleButton>
        <ToggleButton
          value="drinks"
          aria-label="centered"
          disabled={selected === "drinks" ? false : true}
        >
          Drinks
        </ToggleButton>
        <ToggleButton
          value="sides"
          aria-label="right aligned"
          disabled={selected === "sides" ? false : true}
        >
          Sides
        </ToggleButton>
        <ToggleButton
          value="order"
          aria-label="justified"
          disabled={selected === "order" ? false : true}
        >
          Order
        </ToggleButton>
      </ToggleButtonGroup>
    </StyledWrapper>
  );
}

export default ToggleMenu;
