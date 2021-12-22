import React from "react";
import { StyledCard, StyledCardContent } from "./StyledCardBox";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

const CardBox = ({ item }) => {
  const history = useHistory();

  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={item.img} alt="food" />
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default CardBox;
