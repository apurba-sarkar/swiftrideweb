import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <div>Welcome</div>
      <button onClick={() => navigate("/login")}>hello</button>
    </>
  );
};

export default Welcome;
