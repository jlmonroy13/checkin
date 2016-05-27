
export function getweeksFactory($moment) {
  'ngInject';
  var date,
      day,
      numberDay,
      saturday,
      daysToSaturday,
      dateToDisplay,
      weeks = [],
      factory = {
        get2weeks: get2weeks
      };

  return factory;
  
  function get2weeks() {
    weeks = [];
    saturday = moment().day("Saturday");
    daysToSaturday = parseInt(moment(saturday).toNow());
    if(isNaN(daysToSaturday)) {
      daysToSaturday = 1;
    }
    //Get last 12 days from now 
    weeks.push(
      {day: moment().format('dddd'), numberday: moment().format('D'), dateToDisplay: moment().format('dddd, MMM D'), date: moment().format('YYYY-MM-DD'), selected: true, checkin: false, future: false});
    for(var i=1; i<13; i++) {
      date = moment().subtract(i, 'days').format('YYYY-MM-DD');
      day = moment().subtract(i, 'days').format('dddd');
      numberDay = moment().subtract(i, 'days').format('D');
      dateToDisplay = moment().subtract(i, 'days').format('dddd, MMM D');
      weeks.push({day: day, numberday: numberDay, dateToDisplay: dateToDisplay, date: date, selected: false, checkin: false, future: false});
    }
    //Get days since today to Saturday
    for(var i=1; i < daysToSaturday+1; i++) {
      date = moment().add(i, 'days').format('YYYY-MM-DD');
      day = moment().add(i, 'days').format('dddd');
      numberDay = moment().add(i, 'days').format('D');
      dateToDisplay = moment().add(i, 'days').format('dddd, MMM D');
      weeks.unshift({day: day, numberday: numberDay, dateToDisplay: dateToDisplay, date: date, selected: false, checkin: false, future: true});
    }
    //Delete Sundays
    weeks = $.grep(weeks, function(data){
      return data.day != 'Sunday';
    });
    return weeks;
  }
}
