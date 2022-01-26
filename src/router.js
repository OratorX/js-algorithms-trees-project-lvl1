class Router {
  constructor(routes) {
    this.routes = routes;
  }

  serve(routeName) {
    let routesWithSpecifiedName = this.routes.filter(function(route){
      return route.path === routeName;
    });
    if (routesWithSpecifiedName.isEmpty) {
      throw new Error(`Route with name ${routeName} does not exist`);
    } else {
      return routesWithSpecifiedName[0];
    }
  }


}

function makeRouter(routes) {
  return new Router(routes);
}

// import makeRouter from '@hexlet/code';
//
// const routes = [
//   {
//     // Роутер используется как часть на конкретном сайте, поэтому роутеру нужно знать лишь про сами маршруты на сайте
//     // не учитываем протокол, хост и т. д.
//     path: '/courses', // маршрут
//     handler: () => 'courses!', // обработчик
//   },
//   {
//     path: '/courses/basics',
//     handler: () => 'basics',
//   },
// ];
//
// const router = makeRouter(routes);
//
// const path = '/courses';
// const handler = router.serve(path);
// handler(); // courses!
//
// // здесь выбросится исключение
// router.serve('/no_such_way'); // Error
