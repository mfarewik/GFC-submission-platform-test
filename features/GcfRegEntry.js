// GcfRegEntry.js
// To create an entry
import { Selector, getTime , ClientFunction} from 'testcafe';
import config from './config';
import Page from '../genericFuncitons/page-model';
import Helpers from '../genericFuncitons/helpers'


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

const page = new Page();
const email = "m8r-qkyx87@mailinator.com";
const password = "Testtest1";
const ARTICLE_TITLE = "My Thunder";
const ARTICLE_TAG = "Myfirst Tag";
const LOGIN_CONTAINER = Selector('.app-col-right');
const LOGIN_BUTTON = Selector('.gcf-btn-blue').nth(1);
const LOGOUT_BUTTON = Selector('a.i.ion-android-exit');
const REGISTER_BUTTON = Selector('.gcf-btn-blue').nth(0);
const NEXTSTEP_BUTTON = Selector('.gcf-btn-blue').nth(2);

test('GCF Register Entry Test', async t => {

  await t
  .expect(LOGIN_BUTTON.visible).ok()
  .expect(LOGIN_CONTAINER.find(' input[type="email"]').exists).ok()
  .typeText(LOGIN_CONTAINER.find('input[type="email"]'), email)
  .expect(LOGIN_CONTAINER.find(' input[type="password"]').exists).ok()
  .typeText(LOGIN_CONTAINER.find(' input[type="password"]'), password)

  .wait(500)
  .click(LOGIN_BUTTON)
  .wait(500)

  .expect(Selector('.gcf-text').withText('Entries').exists).ok()

//Execute entry tc
//TAB GENERAL INFORMATION
  .expect(Selector('.gcf-btn-blue').withText('ADD ENTRY').exists).ok()
  .click(Selector('.gcf-btn-blue').withText('ADD ENTRY'))

  .expect(Selector('#person').exists).ok()
  .click(Selector('#person'))

  .expect(Selector(page.title).exists).ok()
  .typeText( page.title, ARTICLE_TITLE)


  for (const optionInputFeature of page.entryDropdownList){
    await t
      .expect(optionInputFeature.label.exists).ok()
      .click(optionInputFeature.option1)
      .click(optionInputFeature.option2)
  }  await t

  .expect(Selector(page.newTag).exists).ok()
  .typeText( page.newTag, ARTICLE_TAG)
  .pressKey('enter')
  .wait(5000)


//TAB General information/Authors/Proposal/Review & Submit
  .expect(Selector('div.gcf-text').withText('Authors').exists).ok()
  .click(page.entryDesktopStep2)
  .expect(Selector('div.os').withText('1. Abstract').exists).ok()
  .click(page.entryDesktopStep3)
  .expect(Selector('div.gcf-text').withText('Proposal').exists).ok()
  .click(page.entryDesktopStep0)
  .expect(Selector('div.os').withText('General information').exists).ok()
  .click(page.entryDesktopStep1)
  .expect(Selector('div.gcf-text').withText('Authors').exists).ok()

//Add Authors



//Fillout Form



//LOGOUT navigation

    .expect(Selector('div.gcf-title').exists).ok()
    .wait(5000)
    .click(Selector('.ion-android-exit'))

  });
