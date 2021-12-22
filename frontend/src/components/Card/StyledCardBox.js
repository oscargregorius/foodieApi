import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const StyledCard = styled(Card)`
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const StyledCardContent = styled(CardContent)`
  &:hover {
    background: orange;
  }
`;

export const StyledCat = styled.p`
  font-size: 1rem;
`;

export const StyledText = styled.span`
  font-size: 1rem;
`;

export const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 1rem;
`;

export const StyledAmount = styled.div`
  padding: 0.5rem;
  justify-self: center;
`;
