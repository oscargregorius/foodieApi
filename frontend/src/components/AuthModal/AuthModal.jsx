import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function AuthModal() {
  const [isRegPage, setIsRegPage] = useState(false);

  return (
    <>
      {isRegPage ? (
        <Register handleReg={setIsRegPage}></Register>
      ) : (
        <Login handleReg={setIsRegPage}></Login>
      )}
    </>
  );
}

export default AuthModal;
