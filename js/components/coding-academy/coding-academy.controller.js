class CodingAcademyController {
  // @ngInject
  constructor( $element, $attrs ) {

    console.log('You have access to the element here', $element);
    console.log('You have access to the element attributes here', $attrs);

    this.name = 'Coding Academy';
  }

  clickMe() {
    alert('You are going to be Angular Js Ninja Very Soon!!!!');
  }

}

export default CodingAcademyController