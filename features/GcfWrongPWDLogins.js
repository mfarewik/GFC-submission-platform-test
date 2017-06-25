import { Selector, getTime , ClientFunction} from 'testcafe';
import config from './config';
import Page from '../genericFuncitons/page-model';


fixture `init test Global Challenge Foundation Submission`
.page `${config.baseUrl}/en/submission-platform/sign-in`

  .beforeEach(async t => {
    await t
    .expect(REGISTER_BUTTON.visible).ok()
      for (const closeCookieFeature of page.closeCookie){
        await t
          .expect(closeCookieFeature.label.exists).ok()
          .click(closeCookieFeature.label)
        }
      })


const page = new Page();
const email = "m8r-qkyx87@mailinator.com";
const password = "WRONGPWD";
const REGISTER_BUTTON = Selector('.gcf-btn-blue').nth(0);
const LOGIN_CONTAINER = Selector('.app-col-right');
const LOGIN_BUTTON = Selector('.gcf-btn-blue').nth(1);
const LOGOUT_BUTTON = Selector('a.i.ion-android-exit');
    // Close the cookie accept button


  // Cookie navigation

  // LOGIN  navigation
test('GCF Wrong PWD LOGIN Test', async t => {

  await t
  .expect(LOGIN_BUTTON.visible).ok()
  .expect(LOGIN_CONTAINER.find(' input[type="email"]').exists).ok()
  .typeText(LOGIN_CONTAINER.find('input[type="email"]'), email)
  .expect(LOGIN_CONTAINER.find(' input[type="password"]').exists).ok()
  .typeText(LOGIN_CONTAINER.find(' input[type="password"]'), password)
  .wait(1000)
  //  .click(Selector('.gcf-btn-blue'))

    .expect(Selector('body').exists).ok()
    .wait(500)
    .click(LOGIN_BUTTON)
    .wait(1000)
    //Verifying that the PWD was wrong and that it's not possible to login.
    .expect(Selector('div.app-formerror-not-abs').exists).ok()
    .expect(Selector('div.app-formerror-not-abs').withText('Could not login with given email & password combination').exists).ok()
  });
