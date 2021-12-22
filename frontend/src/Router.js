import { BrowserRouter as MenuRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllUsers from "./pages/AllUsers/AllUsers";
import Food from "./pages/Food/Food";
import Drinks from "./pages/Drinks/Drinks";
import Sides from './pages/Sides/Sides.jsx';

const Router = ({ children }) => {
  return (
    <MenuRouter>
      {children}
      <Route exact path="/" component={Home} />
      <Route exact path="/allUsers" component={AllUsers} />
      <Route exact path="/food" component={Food} />
      <Route exact path="/drinks" component={Drinks} />
      <Route exact path="/sides" component={Sides} />
    </MenuRouter>
  );
};

export default Router;
