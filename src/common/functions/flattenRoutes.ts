import { IRoute, IRoutes } from "assets/typings";

export const flattenRoutes = (routes: IRoutes[]): IRoute[] => {
  let results: IRoute[] = [];
  routes.forEach((route) => {
    results.push(route);
    if (route.children !== undefined) {
      results = [...results, ...flattenRoutes(route.children)];
    }
  });
  return results;
};
