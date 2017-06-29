// GcfRegiterPerson.js
// verify that the input and send of Register a user works
import { Selector, getTime , ClientFunction} from 'testcafe';
import config from './config';
import Page from '../genericFuncitons/page-model';
var utils = require('../genericFuncitons/helpers');
var file = '../../../data/data.json'

fixture `init test Global Challenge Foundation Submission`
.page `${config.baseUrl}/en/submission-platform/sign-in`

.beforeEach(async t => {
  await t
  .expect(REGISTER_BUTTON.visible).ok()
  // Close the cookie accept button
  for (const closeCookieFeature of page.closeCookie){
    await t
      .expect(closeCookieFeature.label.exists).ok()
      .click(closeCookieFeature.label)
    }
})

const debug = ClientFunction(() => {
    debugger;
    });

function randMs(){
  const d = new Date();
  var randomMsec = d.getTime();
  return randomMsec;
}

const page = new Page();
const PREFIX = 'GCF' + randMs();
const EMAILADRESS = utils.eMailAdress('Gcf.');
const PWD = "Testtest1";
const ORG = "B-doom";
const REGISTER_CONTAINER = Selector('.app-col-left');
const REGISTER_BUTTON = Selector('.gcf-btn-blue').nth(0);
const LOGOUT_BUTTON = Selector('.ion-android-exit');
const FIRSTNAME = "Xenon";
const LASTNAME = "Savie";
const ARTICLE_TITLE = "Meh";
const NATIONALITY = "Swedish";
const JOBTITLE = "Swash Buckler"
const GENDER = "Female"
const MAILINATOR = 'https://www.mailinator.com/inbox2.jsp?to=' + PREFIX + '#/#public_maildirdiv';


// this is a test


var selectAge = Selector('#age').filter('#age');
var selectCountryResidence = Selector('#countryResidence').filter('#countryResidence');
var selectEducationLevel = Selector('#educationLevel').filter('#educationLevel');
var selectReferrer = Selector('#referrer').filter('#referrer');
var selectGender = Selector('#gender').filter('#gender');

var jsonfile = require('jsonfile')
var file = '../../../data/data.json'
var obj = {email: EMAILADRESS}


jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
  console.error(err)
})

test('Navigate to GCF Register Person test', async t => {
  // LOGIN  navigation
  await t.wait(10000)
  // This is to create a mail box at https://www.mailinator.com/
  // To be able to verify that the email has gone to the correct user.
  .navigateTo(MAILINATOR)
  .wait(500)
  .expect(Selector('#publicinboxfield').exists).ok()
  .wait(500)

  //Navigate back to GCF
  .navigateTo(`https://gcf-beta.koslun.com/en/submission-platform/sign-in`)
  .expect(Selector('body').exists).ok()
  .wait(500)

  .click(REGISTER_BUTTON)

  // Text inserts in profile/register
  .expect(Selector(page.firstname).exists).ok()
  .typeText( page.firstname, FIRSTNAME)

  .expect(Selector(page.lastname).exists).ok()
  .typeText(page.lastname, LASTNAME)

  .expect(Selector(page.organisation).exists).ok()
  .typeText(page.organisation, ORG)

  .expect(Selector(page.email).exists).ok()
  .typeText(page.email, EMAILADRESS)

  .expect(Selector(page.password).exists).ok()
  .typeText(page.password, PWD)

  .expect(Selector(page.repeatPassword).exists).ok()
  .typeText(page.repeatPassword, PWD)

  .expect(Selector(page.title).exists).ok()
  .typeText(page.title, ARTICLE_TITLE)

  .expect(Selector(page.nationality).exists).ok()
  .typeText(page.nationality, NATIONALITY)

//Dropdown menues

  .expect(Selector(page.jobTitle).exists).ok()
  .typeText(page.jobTitle, JOBTITLE)

// Input fields
  for (const optionInputFeature of page.optionInputFeatureList){
    await t
      .expect(optionInputFeature.label.exists).ok()
      .click(optionInputFeature.option1)
      .click(optionInputFeature.option2)
  }


//  Check Boxes validation
  for (const checkboxFeature of page.chekboxFeatureList) {
    await t
      .expect(checkboxFeature.label.exists).ok()
  // NOTE: we need to add offset because otherwise we can click links
      .click(checkboxFeature.label, { offsetX: 0 })
      .expect(checkboxFeature.checkbox.checked).ok()
    }


  await t
  .click('#register-btn')
  .expect(Selector('.gcf-btn-blue').exists).ok()
  .expect(Selector('.popup-text').withText('Please go to your e-mail inbox to confirm your e-mail').exists).ok()
  .click('.gcf-btn-blue')

  .wait(500)
});
