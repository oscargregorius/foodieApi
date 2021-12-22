import { BrowserRouter as MenuRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import MenuItem from "./pages/MenuItem/MenuItem";
import AllUsers from "./pages/AllUsers/AllUsers";

const Router = ({ children }) => {
  return (
    <MenuRouter>
      {children}
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/menuitem/:id" component={MenuItem} />
      <Route exact path="/allUsers" component={AllUsers} />
    </MenuRouter>
  );
};

export default Router;
