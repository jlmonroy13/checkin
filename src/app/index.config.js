export function config ($logProvider, toastrConfig, localStorageServiceProvider, $httpProvider, $momentProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  //LOCAL STORAGE CONFIG
  localStorageServiceProvider
    .setPrefix('CheckIn')
    .setNotify(true, true);
  //$HTTP INTERCEPTORS CONFIG
  $httpProvider.interceptors.push('httpInterceptorFactory');  
  //MOMENT CONFIG
  $momentProvider
    .asyncLoading(false)
    .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
}