// PAGE MODEL
import { Selector } from 'testcafe';

const label = Selector('label');

// class optionInputFeature {
//     constructor (inputId, value) {
//       this.label = Selector('label').withAttribute('for', inputId);
//       this.option = Selector('#' + inputId).filter(value);
//     }
// }

class checkboxFeature {
    constructor (inputId) {
        this.label = Selector('label').withAttribute('for', inputId);
        this.checkbox = Selector('#' + inputId);
    }
}

export default class {
  constructor(){
      this.firstname      = Selector('#firstname');
      this.lastname       = Selector('#lastname');
      this.organisation   = Selector('#organisation');
      this.email          = Selector('#email');
      this.password       = Selector('#password');
      this.repeatPassword = Selector('#repeatPassword');
      this.title          = Selector('#title');
      this.nationality    = Selector('#nationality');

      //Malinator
      this.publicinboxfield = Selector('#publicinboxfield');

      this.chekboxFeatureList = [
        new checkboxFeature('newsletter'),
        new checkboxFeature('terms'),
        new checkboxFeature('contact'),
        new checkboxFeature('statistics'),
        new checkboxFeature('late-registration')
    ];
    // this.optionInputFeatureList = [
    //     new optionInputFeature('referrer', 'blog')
    // ]
  }
}
