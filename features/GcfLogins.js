import { Selector, ClientFunction, getTime  } from 'testcafe';
import config from './config';
import Page from '../genericFuncitons/page-model';

const page = new Page();
const email = "m8r-qkyx87@mailinator.com";
const password = "Testtest1";
const LOGIN_CONTAINER = Selector('.app-col-right');
const LOGIN_BUTTON = Selector('.gcf-btn-blue').nth(1);
const LOGOUT_BUTTON = Selector('a.i.ion-android-exit');
const REGISTER_BUTTON = Selector('.gcf-btn-blue').nth(0);


fixture `init test Global Challenge Foundation Submission`
  .page `${config.baseUrl}/en/submission-platform/sign-in`
    .beforeEach(async t => {
        await t.wait(20000)
        .expect(REGISTER_BUTTON.visible).ok()
        .expect(Selector('body').exists).ok()

        // Close the cookie accept button
        for (const closeCookieFeature of page.closeCookie){
          await t
            .expect(closeCookieFeature.label.exists).ok()
            .click(closeCookieFeature.label)
          }
    })



  // LOGIN  navigation
test('GCF LOGIN/LOGOUT Test', async t => {


  await t
  .expect(LOGIN_BUTTON.visible).ok()
  .expect(LOGIN_CONTAINER.find(' input[type="email"]').exists).ok()
  .typeText(LOGIN_CONTAINER.find('input[type="email"]'), email)
  .expect(LOGIN_CONTAINER.find('input[type="password"]').exists).ok()
  .typeText(LOGIN_CONTAINER.find(' input[type="password"]'), password)



  .wait(500)
  .click(LOGIN_BUTTON)
  .wait(500)

  .expect(Selector('.gcf-text').withText('Entries').exists).ok()
  //LOGOUT navigation
    .expect(Selector('div.gcf-title').exists).ok()
    .wait(500)
    .click(Selector('.ion-android-exit'))
  });
