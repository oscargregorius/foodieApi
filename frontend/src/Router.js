import { BrowserRouter as MenuRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";

const Router = ({ children }) => {
  return (
    <MenuRouter>
      {children}
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
    </MenuRouter>
  );
};

export default Router;
