import { Selector } from 'testcafe';


fixture `init test Global Challenge Foundation Submission`
    .page (`https://gcf-beta.koslun.com/en/submission-platform/sign-in`)
    .beforeEach(async t => {
        await t
        .expect(LOGIN_BUTTON.visible).ok()
        .expect(LOGIN_CONTAINER.find(' input[type="email"]').exists).ok()
        .typeText(LOGIN_CONTAINER.find('input[type="email"]'), email)
        .expect(LOGIN_CONTAINER.find(' input[type="password"]').exists).ok()
        .typeText(LOGIN_CONTAINER.find(' input[type="password"]'), password)
        .click(LOGIN_BUTTON)
    })

const email = "m8r-qkyx87@mailinator.com";
const password = "testtest1";
const LOGIN_CONTAINER = Selector('.app-col-right');
const LOGIN_BUTTON = Selector('.gcf-btn-blue').nth(1);
const LOGOUT_BUTTON = Selector('.i on-android-exit');


test('My GCF LOGIN test', async t => {
  // LOGIN side navigation
  // Just a verification that login has occured
  await t
    .expect(Selector('body').exists).ok()
//    .expect(mariaMainNav.visible).ok()
//    .expect(mariaMainNav.exists).ok()
    .wait(3000)
    .click(LOGOUT_BUTTON)
//    .expect(Selector('body').exists).ok()
//    .expect(mariaWalletNav.exists).ok();
  });


//  test('GCF LOGOUT test', async t => {
    //LOGOUT side navigation
//    await t
//    .click(LOGIN_BUTTON)
//    .expect(ASIDE_LOGOUT_CONTAINER.visible).ok()
//    .click(ASIDE_LOGOUT_CONTAINER);


//});
