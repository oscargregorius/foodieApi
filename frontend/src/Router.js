import { BrowserRouter as MenuRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";

const Router = ({ children }) => {
  return (
    <MenuRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      {children}
    </MenuRouter>
  );
};

export default Router;
