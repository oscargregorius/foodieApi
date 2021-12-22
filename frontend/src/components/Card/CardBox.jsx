import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

const CardBox = ({ item }) => {
  const history = useHistory();
  const [amount, setAmount] = useState(0);

  const handleDecrese = () => {
    if (amount === 0) {
      return;
    }
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
        <Button
          variant="outlined"
          size="small"
          onClick={() => setAmount((prev) => (prev += 1))}
        >
          +
        </Button>
        <StyledAmount>{amount}</StyledAmount>
        <Button variant="outlined" size="small" onClick={handleDecrese}>
          -
        </Button>
      </StyledButtons>
    </StyledCard>
  );
};

export default CardBox;
