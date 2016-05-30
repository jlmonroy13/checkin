
export function calendarWeek() {
  'ngInject';
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/checkin/calendar-week.html',
    bindToController: {
      week: '=',
      date: '=',
      checkin: '=',
      resetSelectedDates: '&'
    },
    controllerAs: "vm",
    controller: calendarWeekController
  };
  return directive;
  function calendarWeekController(){
    var vm = this;
    vm.getDate = getDate;
    function getDate(date) {
      vm.date = {
        dateToDisplay: date.dateToDisplay,
        day: date.day,
        numberday: date.numberday,
        dateFormat: date.date
      };
      selectDate(date);
    }
    function selectDate(date) {
      vm.resetSelectedDates();
      date.selected = true;
      vm.checkin.time_bill.tran_date = vm.date.dateFormat; //Adding task id to the object for create new checkin
    }
  }
}
 