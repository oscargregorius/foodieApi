import React from "react";
import { StyledCard, StyledCardContent } from "./StyledCardBox";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

const CardBox = ({ title, id }) => {
  const history = useHistory();

  return (
    <StyledCard
      sx={{ maxWidth: 345 }}
      onClick={() => history.push(`/menuitem/${id}`)}
    >
      <CardMedia
        component="img"
        height="140"
        image="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk="
        alt="food"
      />
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
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
