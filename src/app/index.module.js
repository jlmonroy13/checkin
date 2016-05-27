/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { authenticationFactory } from '../app/components/home/authentication.factory';
import { httpInterceptorFactory } from '../app/components/home/httpInterceptor.factory';
import { checkinFactory } from '../app/components/checkin/checkin.factory';
import { getweeksFactory } from '../app/components/checkin/getweeks.factory';
import { checkinCtrl } from '../app/components/checkin/checkin.controller';
import { HistoryController } from '../app/components/history/history.controller';
import { homeController } from '../app/components/home/home.controller';
import { calendarWeek } from '../app/components/checkin/calendar-week.directive';
import { historyItems } from '../app/components/history/history-items.directive';


angular.module('checkinApp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'toastr', 'angular-google-gapi', 'LocalStorageModule', 'selectize', 'angular-momentjs'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .factory('authenticationFactory', authenticationFactory)
  .factory('httpInterceptorFactory', httpInterceptorFactory)
  .factory('checkinFactory', checkinFactory)
  .factory('getweeksFactory', getweeksFactory)
  .controller('ProjectsCtrl', checkinCtrl)
  .controller('loginController', homeController)
  .controller('getHistoryController', HistoryController)
  .directive('calendarWeek', calendarWeek)
  .directive('historyItems', historyItems)


