
export  function historyItems() { 
  'ngInject';
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/history/history-items.html',
    bindToController: {
      checkins: '='
    },
    controllerAs: "vm",
    controller: historyDirectiveController
  };
  return directive;
  function historyDirectiveController(){
  }
}