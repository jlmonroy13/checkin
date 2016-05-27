
export function homeController($window, authenticationFactory, checkinFactory, $location) {
  'ngInject';
  var vm  = this;
  
  vm.login = login; 

  function login() {
    authenticationFactory.login().then(function(data) {
      $location.path('/checkin'); 
    });
  } 
}





