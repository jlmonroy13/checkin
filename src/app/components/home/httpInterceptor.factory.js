
export function httpInterceptorFactory(localStorageService) {
  'ngInject';
  var sessionInjector = {
    request: function($config) {
      var jwt = localStorageService.get('jwt');
        if (jwt !== '') {
          $config.headers['Authorization'] = 'Bearer '+jwt;
        }
        return $config;
    }
  };
  return sessionInjector;
}
