import CodingAcademyController from './coding-academy.controller.js';
import codingAcademyComponent from './coding-academy.component.js';

export default ( app ) => {
  app.controller('CodingAcademyController', CodingAcademyController);
  app.directive('codingAcademy', codingAcademyComponent);
}

