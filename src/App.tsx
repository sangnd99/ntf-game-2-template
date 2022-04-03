import { BrowserRouter } from "react-router-dom";
import Router from "routes";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
