
export function checkinCtrl(
  checkinFactory,
  getweeksFactory,
  $timeout,
  $moment) {
  'ngInject';
  var vm                         =   this,
      projectId;
  
  vm.getProjects                 =   getProjects;
  vm.getProjectId                =   getProjectId;
  vm.configProjectsSelectize     =   {maxItems: 1};
  vm.dates                       =   [];
  vm.actualWeek                  =   [];
  vm.lastWeek                    =   [];
  vm.last12Checkins              =   [];
  vm.selectWeek                  =   [];
  vm.changeWeek                  =   changeWeek;
  vm.statusButton                =   true;
  vm.selectedDate                =   {dateToDisplay: moment().format('dddd, MMM D'),
                                      day: "hola"};
  vm.resetSelectedDates          =   resetSelectedDates;
  vm.prueba                      =   prueba;
  vm.newCheckin                  =   {
                                      time_bill: {
                                                  project_id : '',
                                                  task_id: '',
                                                  duration: '',
                                                  tran_date: '',
                                                  memo: ''
                                                }
                                     };

  function get2weeks() {
    vm.dates = getweeksFactory.get2weeks().reverse(); //Generate a calendar array of the last two weeks
  }
  function getLast12Checkins() {  
    checkinFactory.getTimeBills()//Get last 15 checkins from Netsuite API
      .then(dateFormat);
  }
  function dateFormat(data) { //To be able to compare dates array with checkins array
    get2weeks();
    vm.last12Checkins = data.response;
    angular.forEach(vm.last12Checkins, function(checkin, index) { 
      checkin.dateformat = checkin.date.slice(0,10); 
    });
    dayCheckinWasMade(vm.last12Checkins, vm.dates);
  }
  function dayCheckinWasMade(checkins, dates) { // Check what day Checkin Was Made
    angular.forEach(dates, function(date, key1) {
      angular.forEach(checkins, function(checkin, key2) {
        if(checkin.dateformat === date.date) {
          date.checkin = true;
        }
      });
    });
    splitDateArray();
  }
  function splitDateArray() { // Split to be able to show actual week or last week
    vm.actualWeek = vm.dates.slice(6, 12);
    vm.lastWeek = vm.dates.slice(0, 6);
    vm.selectWeek = vm.actualWeek;
  }
  function getProjects() {
    checkinFactory.getUserProjects()
      .then(displayProjects); 

  }
  function displayProjects(data) {
    angular.forEach(data.response, function(value, index) {
      vm.optionsProjects.push({value: value.id, text: value.title});
    });
  }
  function getProjectId(response) {
    vm.optionsTask = [];
    projectId = response;
    getProjectTask(projectId);
    vm.newCheckin.time_bill.project_id = projectId; //Adding project id to the object for create new checkin
  }
  function getProjectTask(projectId) {
    checkinFactory.getProjectTask(projectId).then(displayTask);

  }
  function displayTask(data) {
    vm.newCheckin.time_bill.task_id = data.response[0].id; //Adding task id to the object for create new checkin
    angular.forEach(data.response, function(value, index) {
      vm.optionsTask.push({value: value.id, text: value.title});
    });
  }
  function changeWeek(data) {
    vm.selectWeek = data;
    changeStatusButton();
  }
  function changeStatusButton() {
    vm.statusButton = !vm.statusButton;
  }
  function resetSelectedDates(data) {
    vm.newCheckin.time_bill.tran_date = vm.selectedDate.dateFormat; //Adding task id to the object for create new checkin
    console.log(vm.selectedDate);
    console.log(vm.newCheckin);
    angular.forEach(vm.dates, function(date, index) {
      date.selected = false;
    });
  }
  function prueba() {
    console.log(vm.newCheckin);
  }
  getLast12Checkins();
  getProjects();
}