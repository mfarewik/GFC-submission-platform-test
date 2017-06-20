// PAGE MODEL
import { Selector } from 'testcafe';

//const REGISTER_BUTTON = Selector('.gcf-btn-blue').nth(0);
const label = Selector('label');
const div = Selector('div');

//Open Dropdown
//Choose value for Dropdown
class optionInputFeature {
    constructor (inputId, value) {
      this.label = Selector('label').withAttribute('for', inputId);
      this.option1 = Selector('#' + inputId).filter('#' + inputId);
      this.option2 = Selector('option').filter(value);
    }
}

class checkboxFeature {
    constructor (inputId) {
        this.label = Selector('label').withAttribute('for', inputId);
        this.checkbox = Selector('#' + inputId);
    }
  }

class acceptCookieFeature {
    constructor (inputId) {
      this.acceptCookieId = Selector('#' + inputId);
      this.acceptCookieClass = Selector('.' + inputId);
      this.acceptCookieDiv  = Selector('div').withAttribute('for', inputId);
    }
}



export default class Page{
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

    this.optionInputFeatureList = [
        new optionInputFeature('age', 'option:nth-child(6)'),
        new optionInputFeature('gender', '[value = female]'),
        new optionInputFeature('countryResidence', '[value="SE"]'),
        new optionInputFeature('educationLevel', '[value="Doctoral degree"]'),
        new optionInputFeature('referrer', '[value="blog"]')
    ];

    this.acceptCookieFeatureList = [
        new acceptCookieFeature('accept-button'),
        new acceptCookieFeature('read-more'),
        new acceptCookieFeature('popup-title'),
        new acceptCookieFeature('gcf-btn-blue'),
        new acceptCookieFeature('accept-button'),
        new acceptCookieFeature('accept-button')
    ];

      this.jobTitle     = Selector('#jobTitle');
  }
}
