export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/components/home/index.html',
      controller: 'loginController',
      controllerAs: 'login'
    })
    .state('checkin', {
      url: '/checkin',
      templateUrl: 'app/components/checkin/index.html',
      controller: 'ProjectsCtrl',
      controllerAs: 'vmCtrl'
    })
    .state('history', {
      url: '/history',
      templateUrl: 'app/components/history/index.html',
      controller: 'getHistoryController',
      controllerAs: 'historyCtrl'
    });

  $urlRouterProvider.otherwise('/');
}


// export function routerConfig ($stateProvider, $urlRouterProvider) {
//   'ngInject';
//   $stateProvider
//     .state('home', {
//       url: '/',
//       templateUrl: 'app/main/main.html',
//       controller: 'MainController',
//       controllerAs: 'main'
//     });

//   $urlRouterProvider.otherwise('/');
// }
