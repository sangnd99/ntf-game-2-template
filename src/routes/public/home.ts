import { IRoutes } from "assets/typings";
import { PATH } from "common/constants";
import Home from "pages/Home";

const homeRoutes: IRoutes = {
  name: "Home",
  path: PATH.HOME,
  Element: Home,
};

export default homeRoutes;
