import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../redux/actions/menuActions";
import MenuItem from "../../components/MenuItem/MenuItem";
import { Wrapper } from "./StyledMenu";
const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector((selector) => selector.menuReducer);

  useEffect(() => {
    if (menu.length) {
      return;
    }
    dispatch(fetchMenu);
  }, []);

  return (
    <Wrapper>
      {menu?.length > 0 &&
        menu.map((item) => <MenuItem key={item.id} item={item} />)}
    </Wrapper>
  );
};

export default Menu;
