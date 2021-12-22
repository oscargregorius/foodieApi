import Navbar from "./components/Navbar/Navbar";
import Router from "./Router";
import AuthModal from "./components/AuthModal/AuthModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { whoAmI } from "./redux/actions/authActions";

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
      </Router>
    </div>
  );
}

export default App;
