// @ngInject
export default ( $stateProvider, $urlRouterProvider ) => {


  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url       : "/",
      template  : '<coding-academy></coding-academy>'
    });
};



