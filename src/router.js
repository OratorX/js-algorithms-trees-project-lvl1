function pathToRegex(path) {
  const regex = `${path.replace(/:[a-z_0-9]+/g, '\\w+')}$`;
  console.log(regex);
  return regex;
}

class Router {
  constructor(routes) {
    this.routes = routes;
  }

  serve(routeName) {
    const routeThatMatchesSomePath = this.routes.find(
      (route) => routeName.match(pathToRegex(route.path)),
    );
    if (routeThatMatchesSomePath === undefined) {
      throw new Error('Route not found');
    } else {
      return routeThatMatchesSomePath;
    }
  }
}

export default function makeRouter(routes) {
  return new Router(routes);
}
