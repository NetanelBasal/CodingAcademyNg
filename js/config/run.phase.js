/*@ngInject*/
export default ( $rootScope ) => {

  $rootScope.$on("$stateChangeStart", function( event, toState, to, fromState, fromParams ) {
  });

  $rootScope.$on('$stateChangeError', function( event, toState, toParams, fromState, fromParams, error ) {
  });

  $rootScope.$on('$stateChangeSuccess', function( event, toState, toParams, fromState, fromParams ) {
  });
}

