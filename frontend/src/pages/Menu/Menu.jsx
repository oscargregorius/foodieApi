import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../redux/actions/menuActions";
import MenuItem from "../../components/MenuItem/MenuItem";
import { Wrapper } from "./StyledMenu";
const Menu = () => {
  const dispatch = useDispatch();
  const { menuitems } = useSelector((selector) => selector.menuReducer);

  useEffect(() => {
    if (menuitems?.length) {
      return;
    }
    dispatch(fetchMenu);
  }, []);

  return (
    <Wrapper>
      {menuitems?.length > 0 &&
        menuitems.map((item) => <MenuItem key={item.id} item={item} />)}
    </Wrapper>
  );
};

export default Menu;
