import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuItem } from "../../redux/actions/menuActions";
import Button from "@mui/material/Button";
import {
  StyledWrapper,
  StyledImg,
  StyledContent,
  StyledTitle,
  StyledText,
  StyledOrderWrapper,
} from "./StyledMenuItem";

function MenuItem() {
  const dispatch = useDispatch();
  const { menuitem } = useSelector((selector) => selector.menuReducer);
  const { id } = useParams();

  useEffect(() => {
    if (menuitem?.length) {
      return;
    }
    fetchMenuItem(dispatch, id);
  }, []);

  return (
    <StyledWrapper>
      <StyledImg />
      <StyledTitle>{menuitem?.length ? menuitem[0].title : ""}</StyledTitle>
      <StyledContent>
        <StyledText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          repellat! Voluptate, minus quia, asperiores nulla eveniet libero
          pariatur voluptatibus eligendi atque corrupti, mollitia reprehenderit
          facilis eum! Nemo ducimus corrupti, numquam voluptatibus quidem
          quisquam mollitia facere laborum pariatur modi eius molestiae aliquam
          aut nobis expedita quae. Modi pariatur placeat exercitationem
          consequuntur repellendus in doloremque eaque provident repudiandae
          ipsum. Qui sunt nesciunt, enim optio, voluptatem suscipit laboriosam
          assumenda esse incidunt quis tenetur soluta sit dolores. Nesciunt,
          mollitia optio! Provident blanditiis ut expedita explicabo non. Vero,
          enim obcaecati? Iste fugit voluptas exercitationem eos ipsa,
          recusandae provident molestias accusamus, explicabo a, ducimus
          deserunt? Inventore.
        </StyledText>
        <StyledOrderWrapper>
          <Button variant="contained">Order</Button>
        </StyledOrderWrapper>
      </StyledContent>
    </StyledWrapper>
  );
}

export default MenuItem;
