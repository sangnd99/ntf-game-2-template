import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { revealOnScroll } from "common/functions";
import Router from "routes";

const App = () => {
  useEffect(() => {
    revealOnScroll();
  }, []);
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
