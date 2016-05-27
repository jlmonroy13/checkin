
export function checkinFactory($http) {
  'ngInject';
  var factory = {
        getUserProjects:      getUserProjects,
        getProjectTask:       getProjectTask,
        getTimeBills:         getTimeBills,
        getCheckinsHistory:   getCheckinsHistory
      };
  return factory;
  
  function getUserProjects() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://dashable-netsuite-api-st.herokuapp.com/api/1/projects",
      "method": "GET",
      "headers": {
        "content-type": "application/json"
      }
    };
    return $http(settings).then(function (response){
      return response.data;
    });
  }
  function getProjectTask(projectID) {
    var settings = { 
      "async": true,
      "crossDomain": true,
      "url": "http://dashable-netsuite-api-st.herokuapp.com/api/1/projects/"+projectID+"/tasks",
      "method": "GET",
      "headers": {
        "content-type": "application/json"
      }
    };
    return $http(settings).then(function (response){
      return response.data;
    });
  }
  function getTimeBills() {
    var settings = { 
      "async": true,
      "crossDomain": true,
      "url": "http://dashable-netsuite-api-st.herokuapp.com/api/1/time_bills/recent",
      "method": "GET",
      "headers": {
        "content-type": "application/json"
      }
    };
    return $http(settings).then(function (response){
      return response.data;
    });
  }
  function getCheckinsHistory() {
    var settings = { 
      "async": true,
      "crossDomain": true,
      "url": "http://dashable-netsuite-api-st.herokuapp.com/api/1/time_bills/history",
      "method": "GET",
      "headers": {
        "content-type": "application/json"
      }
    };
    return $http(settings).then(function (response){
      return response.data;
    });
  }     
}

