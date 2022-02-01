class Router {
  constructor(routes) {
    this.routes = routes;
  }

  serve(routeName) {
    const routesWithSpecifiedName = this.routes.filter((route) => route.path === routeName);
    if (routesWithSpecifiedName.length === 0) {
      throw new Error('Route does not exist');
    } else {
      return routesWithSpecifiedName[0];
    }
  }
}

export default function makeRouter(routes) {
  return new Router(routes);
}
