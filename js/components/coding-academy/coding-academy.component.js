// @ngInject
export default () => {
  return {
    controller      : 'CodingAcademyController as ca',
    controllerAs    : true,
    scope           : {},
    bindToController: {
      name: '@'
    },
    templateUrl     : 'js/components/coding-academy/views/coding-academy.tpl.html'
  }
}
