import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const StyledCard = styled(Card)`
  cursor: pointer;
`;

export const StyledCardContent = styled(CardContent)`
  &:hover {
    background: orange;
  }
`;
