import { Routes, Route } from "react-router-dom";

import { privateRoutes } from "./private";
import { publicRoutes } from "./public";
import { flattenRoutes, randomId } from "common/functions";
import PrivateRoute from "components/PrivateRoute";
import HomeLayout from "layout/Home";

// Home page
import Home from "pages/Home";

// Notfound page
import NotFound from "pages/NotFound";

const Router: React.FC = () => {
  const privates = flattenRoutes(privateRoutes);
  const publics = flattenRoutes(publicRoutes);
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        {publics.map(({ path, name, Element }) => {
          const Page = Element as React.FC;
          return (
            <Route
              path={path}
              element={<Page />}
              key={`route-${name}-${randomId()}`}
            />
          );
        })}
      </Route>
      {/* <Route element={<PrivateRoute />}> */}
      {/*   <Route element={<DashboardLayout />}> */}
      {/*     {privates.map((item) => { */}
      {/*       const Element = item.element as React.FC; */}
      {/*       return ( */}
      {/*         <Route */}
      {/*           path={item.path} */}
      {/*           element={<Element />} */}
      {/*           key={`route-${item.name}-${randomId()}`} */}
      {/*         /> */}
      {/*       ); */}
      {/*     })} */}
      {/*   </Route> */}
      {/* </Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
