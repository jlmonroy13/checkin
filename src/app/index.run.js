export function runBlock($location, $rootScope, $log, GAuth, GApi, GData) {
  'ngInject';
  $log.debug('runBlock end');
  $rootScope.gdata = GData;

  var CLIENT = '767533878479-svf3420ha7ggdrgoqq78kuanbm777ckc.apps.googleusercontent.com';

  GApi.load('oauth2', 'v2');
  GAuth.setClient(CLIENT);
  GAuth.setScope("https://www.googleapis.com/auth/userinfo.email"); 
}