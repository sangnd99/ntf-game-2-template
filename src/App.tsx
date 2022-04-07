import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { revealOnScroll } from "common/functions";
import Router from "routes";

const App = () => {
  useEffect(() => {
    revealOnScroll({ threshold: 0.5 });
  }, []);
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
