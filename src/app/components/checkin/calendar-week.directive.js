
export function calendarWeek() {
  'ngInject';
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/checkin/calendar-week.html',
    bindToController: {
      week: '=',
      date: '=',
      resetSelectedDates: '&'
    },
    controllerAs: "vm",
    controller: calendarWeekController
  };
  return directive;
  function calendarWeekController(){
    var vm = this;
    vm.getDate = getDate;
    console.warn(vm);
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
      date.selected = true;
      console.warn(vm, date);
      vm.resetSelectedDates();
    }
  }
}
 