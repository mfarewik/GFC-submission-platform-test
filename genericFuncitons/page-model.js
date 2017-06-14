// PAGE MODEL
import { Selector } from 'testcafe';

const label = Selector('label');

class checkboxFeature {
    constructor (text) {
        this.label = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox]');


    }
}

export default class Page{
  constructor (){
    this.featureList = [
      new checkboxFeature('#newsletter'),
      new checkboxFeature('#term'),
      new checkboxFeature('#contact'),
      new checkboxFeature('#statistics'),
      new checkboxFeature('#late-registration')
    ];

    this.firstname      = Selector('#firstname');
    this.lastname       = Selector('#lastname');
    this.organisation   = Selector('#organisation');
    this.email          = Selector('#email');
    this.password       = Selector('#password');
    this.repeatPassword = Selector('#repeatPassword');
    this.title          = Selector('#title');
    this.nationality    = Selector('#nationality');

  }
}
