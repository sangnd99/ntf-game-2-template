export interface IRoute {
  name: string;
  path: string;
  Element: React.ReactNode;
  icon?: React.ReactNode;
}

export interface IRoutes {
  name: string;
  path: string;
  Element: React.ReactNode;
  children?: IRoute[];
  icon?: React.ReactNode;
}
