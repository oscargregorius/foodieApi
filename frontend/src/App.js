import Navbar from "./components/Navbar/Navbar";
import Router from "./Router";
import AuthModal from "./components/AuthModal/AuthModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { whoAmI } from "./redux/actions/authActions";
import Cart from "./components/Cart/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    whoAmI(dispatch);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AuthModal />
        <Cart />
      </Router>
    </div>
  );
}

export default App;
