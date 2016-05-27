
export function HistoryController(checkinFactory) {
  'ngInject';
  var vm  = this;

  vm.getCheckinsHistory = getCheckinsHistory; 

  function getCheckinsHistory() {
    checkinFactory.getCheckinsHistory()//jwt
      .then(bindHistory);
  }
  function bindHistory(data) {
    console.log(data);
    vm.history = data.response;
  }
  getCheckinsHistory();
}
